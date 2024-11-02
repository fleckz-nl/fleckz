import { useState } from 'react'

import type {
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables,
} from 'types/graphql'
import workers from 'web/public/images/workers.png'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import IndividualWorkRequestSection from 'src/components/IndividualWorkRequestSection/IndividualWorkRequestSection'
import PlanWorkComponent from 'src/components/PlanWorkComponent/PlanWorkComponent'

export const QUERY: TypedDocumentNode<
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables
> = gql`
  query WorkRequestsTodayQuery {
    workRequestsToday: workRequestsToday {
      id
      projectName
      startDate
      endDate
      jobProfile {
        id
        name
      }
      shifts {
        id
        createdAt
        updatedAt
        workerName
        checkedInAt
        checkedOutAt
        status
        tempAgency {
          id
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <div className="center w-full flex-col">
      <div className="center relative -top-14 flex-col">
        <img src={workers} alt="workers illustration" className="size-56" />
        <span className="text-center text-lg italic">
          Vandaag geen werk, geen diensten.
        </span>
      </div>
      <PlanWorkComponent open={openDialog} setOpen={setOpenDialog} />
    </div>
  )
}
export const Failure = ({
  error,
}: CellFailureProps<WorkRequestsTodayQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequestsToday,
}: CellSuccessProps<
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables
>) => {
  return workRequestsToday.map((request) => (
    <IndividualWorkRequestSection key={request.id} workRequest={request} />
  ))
}
