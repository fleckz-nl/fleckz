import { useState } from 'react'

import { CheckCircle2, Hourglass, Award, NotepadText } from 'lucide-react'
import { WorkRequestsQuery } from 'types/graphql'

import {
  OverviewContent,
  OverviewHeader,
  OverviewSection,
} from 'src/components/OverviewSection'
import PlanWorkComponent from 'src/components/PlanWorkComponent'
import RequestStatusCard from 'src/components/RequestStatusCard'
import { Card, CardHeader } from 'src/components/ui/card'

type OverviewCardsProps = {
  workRequests: WorkRequestsQuery['workRequests']
}

const OverviewCards = ({ workRequests }: OverviewCardsProps) => {
  const [openDialog, setOpenDialog] = useState(false)

  const confirmedRequests = workRequests.filter((r) => r.status === 'CONFIRMED')

  const submittedRequests = workRequests.filter((r) => r.status === 'SUBMITTED')

  const doneRequests = workRequests.filter((r) => r.status === 'DONE')

  const draftRequests = workRequests.filter((r) => r.status === 'DRAFT')
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

function NoResultsCard() {
  return (
    <Card className="bg-transparent text-secondary">
      <CardHeader>Geen Resultaten</CardHeader>
    </Card>
  )
}

export default OverviewCards
