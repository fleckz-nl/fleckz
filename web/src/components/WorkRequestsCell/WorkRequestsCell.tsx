import { useState } from 'react'

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

import OverviewSection, {
  OverviewContent,
  OverviewHeader,
} from '../OverviewSection/OverviewSection'
import PlanWorkComponent from '../PlanWorkComponent/PlanWorkComponent'
import RequestStatusCard from '../RequestStatusCard/RequestStatusCard'
import RequestStatusCardSkeleton from '../RequestStatusCardSkeleton/RequestStatusCardSkeleton'
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

  const [openDialog, setOpenDialog] = useState(false)

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
          <Award className="mr-1 inline" />
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
          <NotepadText className="mr-1 inline" />
          Concept
        </OverviewHeader>
        <OverviewContent>
          {draftRequests.map((request) => {
            return <RequestStatusCard key={request.id} request={request} />
          })}
          {draftRequests.length === 0 && <NoResultsCard />}
        </OverviewContent>
      </OverviewSection>
      <div className="center">
        <PlanWorkComponent open={openDialog} setOpen={setOpenDialog} />
      </div>
    </>
  )
}
