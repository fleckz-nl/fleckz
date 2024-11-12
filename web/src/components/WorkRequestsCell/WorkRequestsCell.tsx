import { useEffect, useState } from 'react'

import { GalleryThumbnails, Rows4 } from 'lucide-react'
import type {
  WorkRequestsQuery,
  WorkRequestsQueryVariables,
} from 'types/graphql'

import { navigate, useParams } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import AcceptedRequestsTable from 'src/components/AcceptedRequestsTable'
import OverviewCards from 'src/components/OverviewCards'
import OverviewCardsSkeleton from 'src/components/OverviewCardsSkeleton/OverviewCardsSkeleton'
import TableSkeleton from 'src/components/TableSkeleton/TableSkeleton'
import { Skeleton } from 'src/components/ui/skeleton'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs'

const TABS = {
  cards: 'cards',
  table: 'table',
}

export const QUERY: TypedDocumentNode<
  WorkRequestsQuery,
  WorkRequestsQueryVariables
> = gql`
  query WorkRequestsQuery {
    workRequests {
      id
      projectName
      startDate
      endDate
      status
      numWorkers
      location {
        id
        street
        houseNumber
        city
        province
        country
        postalCode
      }
      jobProfile {
        id
        name
        hourlyWageMin
        hourlyWageMax
      }
      shifts {
        id
        status
        tempAgency {
          id
          name
          email
          phone
          address {
            street
            houseNumber
            houseNumberAddition
            postalCode
            city
          }
        }
      }
    }
  }
`

export const Loading = () => {
  const queryParams = useParams()

  return (
    <div className="mx-auto min-h-screen max-w-6xl space-y-6 bg-transparent">
      <div className="inline-flex w-full justify-end gap-2">
        {Object.values(TABS).map((v) => (
          <Skeleton key={v} className="bg-pr h-7 w-8 bg-primary-foreground" />
        ))}
      </div>
      {queryParams.view === TABS.cards && <OverviewCardsSkeleton />}
      {queryParams.view === TABS.table && <TableSkeleton />}
    </div>
  )
}

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequests,
}: CellSuccessProps<WorkRequestsQuery>) => {
  const queryParams = useParams()

  const [selectedTab, setSelectedTab] = useState(
    TABS[queryParams.view] || TABS.table
  )

  useEffect(() => {
    navigate(`?view=${selectedTab}`, { replace: true })
  }, [selectedTab])

  return (
    <>
      <Tabs value={selectedTab} className="w-full">
        <TabsList className="w-full justify-end bg-transparent">
          <TabsTrigger
            value={TABS.table}
            onClick={() => setSelectedTab(TABS.table)}
          >
            <h2 className="sr-only">Accepted requests</h2>
            <Rows4 />
          </TabsTrigger>
          <TabsTrigger
            value={TABS.cards}
            onClick={() => setSelectedTab(TABS.cards)}
          >
            <h2 className="sr-only">All Requests</h2> <GalleryThumbnails />
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TABS.cards}>
          <OverviewCards workRequests={workRequests} />
        </TabsContent>
        <TabsContent value={TABS.table}>
          <AcceptedRequestsTable workRequests={workRequests} />
        </TabsContent>
      </Tabs>
    </>
  )
}
