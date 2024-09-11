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
        id
        name
        hourlyWageMin
        hourlyWageMax
        qualityNeeded
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequests,
}: CellSuccessProps<WorkRequestsQuery>) => {
  const confirmedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')

  const submittedRequests = workRequests.filter((r) => r.status === 'SUBMITTED')

  const doneRequests = workRequests.filter((r) => r.status === 'DONE')

  const draftRequests = workRequests.filter((r) => r.status === 'DRAFT')

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
          <CheckCircle2 className="mr-1 inline" />
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
          <Hourglass className="mr-1 inline" />
          In uitvoering
        </OverviewHeader>
        <OverviewContent>
          {submittedRequests.map((request) => {
            return <RequestStatusCard key={request.id} request={request} />
          })}
          {submittedRequests.length === 0 && <NoResultsCard />}
        </OverviewContent>
      </OverviewSection>
      <OverviewSection>
        <OverviewHeader>
          <Hourglass className="mr-1 inline" />
          Afgerond
        </OverviewHeader>
        <OverviewContent>
          {doneRequests.map((request) => {
            return <RequestStatusCard key={request.id} request={request} />
          })}
          {doneRequests.length === 0 && <NoResultsCard />}
        </OverviewContent>
      </OverviewSection>
      <OverviewSection>
        <OverviewHeader>
          <Hourglass className="mr-1 inline" />
          Concept
        </OverviewHeader>
        <OverviewContent>
          {draftRequests.map((request) => {
            return <RequestStatusCard key={request.id} request={request} />
          })}
          {draftRequests.length === 0 && <NoResultsCard />}
        </OverviewContent>
      </OverviewSection>
    </>
  )
}
