import { Award, CheckCircle2, Hourglass, NotepadText } from 'lucide-react'
import type {
  WorkRequestsQuery,
  WorkRequestsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import OverviewCards from 'src/components/OverviewCards'
import OverviewSection, {
  OverviewContent,
  OverviewHeader,
} from 'src/components/OverviewSection'
import RequestStatusCardSkeleton from 'src/components/RequestStatusCardSkeleton'

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
  return (
    <>
      <OverviewCards workRequests={workRequests} />
    </>
  )
}
