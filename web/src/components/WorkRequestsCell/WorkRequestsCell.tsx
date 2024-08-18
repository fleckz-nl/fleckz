import { CheckCircle2, Hourglass } from 'lucide-react'
import type {
  WorkRequestsQuery,
  WorkRequestsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import OverviewSection, {
  OverviewContent,
  OverviewHeader,
} from '../OverviewSection/OverviewSection'
import RequestStatusCard from '../RequestStatusCard/RequestStatusCard'
import { Card, CardHeader } from '../ui/card'

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
        name
        hourlyWageMin
        hourlyWageMax
        qualityNeeded
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequests,
}: CellSuccessProps<WorkRequestsQuery>) => {
  const confirmedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')

  const otherRequests = workRequests.filter((r) => r.status !== 'CONFIRMED')

  function NoResultsCard() {
    return (
      <Card className="bg-transparent text-secondary">
        <CardHeader>Geen Resultaten</CardHeader>
      </Card>
    )
  }

  return (
    <>
      <OverviewSection>
        <OverviewHeader>
          <CheckCircle2 className="mr-2 inline" />
          Geaccepteerd
        </OverviewHeader>
        <OverviewContent>
          {confirmedRequests.map((request) => {
            return <RequestStatusCard key={request.id} request={request} />
          })}
          {confirmedRequests.length === 0 && <NoResultsCard />}
        </OverviewContent>
      </OverviewSection>
      <OverviewSection>
        <OverviewHeader>
          <Hourglass className="mr-2 inline" />
          Aanhangig
        </OverviewHeader>
        <OverviewContent>
          {otherRequests.map((request) => {
            return <RequestStatusCard key={request.id} request={request} />
          })}
          {otherRequests.length === 0 && <NoResultsCard />}
        </OverviewContent>
      </OverviewSection>
    </>
  )
}
