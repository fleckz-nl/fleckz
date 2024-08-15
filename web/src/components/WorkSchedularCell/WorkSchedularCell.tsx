import {
  type WorkSchedularQuery,
  type WorkSchedularQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import BigCalendar from '../BigCalendar/BigCalendar'

export const QUERY: TypedDocumentNode<
  WorkSchedularQuery,
  WorkSchedularQueryVariables
> = gql`
  query WorkSchedularQuery {
    workRequests: workRequests {
      id
      projectName
      jobProfileId
      startDate
      endDate
      numWorkers
      addressId
      status
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <BigCalendar />

export const Failure = ({
  error,
}: CellFailureProps<WorkSchedularQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workRequests,
}: CellSuccessProps<WorkSchedularQuery, WorkSchedularQueryVariables>) => {
  return <BigCalendar defaultEvents={workRequests} />
}
