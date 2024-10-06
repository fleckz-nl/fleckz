import { useEffect, useState } from 'react'

import {
  Award,
  CheckCircle2,
  GalleryThumbnails,
  Hourglass,
  NotepadText,
  Rows4,
} from 'lucide-react'
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
import OverviewSection, {
  OverviewContent,
  OverviewHeader,
} from 'src/components/OverviewSection'
import RequestStatusCardSkeleton from 'src/components/RequestStatusCardSkeleton'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs'

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

export const Loading = () => (
  <div className="mx-auto min-h-screen max-w-6xl space-y-6 bg-transparent">
    <OverviewSection>
      <OverviewHeader>
        <CheckCircle2 className="mr-1 inline" />
        Geaccepteerd
      </OverviewHeader>
      <OverviewContent>
        <RequestStatusCardSkeleton />
      </OverviewContent>
    </OverviewSection>
    <OverviewSection>
      <OverviewHeader>
        <Hourglass className="mr-1 inline" />
        In uitvoering
      </OverviewHeader>
      <OverviewContent>
        {Array.from({ length: 3 }).map((_, i) => {
          return <RequestStatusCardSkeleton key={i} />
        })}
      </OverviewContent>
    </OverviewSection>
    <OverviewSection>
      <OverviewHeader>
        <Award className="mr-1 inline" />
        Afgerond
      </OverviewHeader>
      <OverviewContent>
        <RequestStatusCardSkeleton />
      </OverviewContent>
    </OverviewSection>
    <OverviewSection>
      <OverviewHeader>
        <NotepadText className="mr-1 inline" />
        Concept
      </OverviewHeader>
      <OverviewContent>
        <RequestStatusCardSkeleton />
      </OverviewContent>
    </OverviewSection>
    <div className="center"></div>
  </div>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequests,
}: CellSuccessProps<WorkRequestsQuery>) => {
  const queryParams = useParams()
  const TABS = {
    cards: 'cards',
    table: 'table',
  }
  const [selectedTab, setSelectedTab] = useState(
    TABS[queryParams.view] || TABS.cards
  )

  useEffect(() => {
    navigate(`?view=${selectedTab}`, { replace: true })
  }, [selectedTab])

  return (
    <>
      <Tabs value={selectedTab} className="w-full">
        <TabsList className="w-full justify-end bg-transparent">
          <TabsTrigger
            value={TABS.cards}
            onClick={() => setSelectedTab(TABS.cards)}
          >
            <h2 className="sr-only">All Requests</h2> <GalleryThumbnails />
          </TabsTrigger>
          <TabsTrigger
            value={TABS.table}
            onClick={() => setSelectedTab(TABS.table)}
          >
            <h2 className="sr-only">Accepted requests</h2>
            <Rows4 />
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
