import type {
  WorkRequestsTodayQuery,
  WorkRequestsTodayQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import IndividualWorkRequestSection from 'src/components/IndividualWorkRequestSection/IndividualWorkRequestSection'

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

export const Empty = () => <div>Empty</div>

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
