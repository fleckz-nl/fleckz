import type {
  AgenciesQuery,
  AgenciesQueryVariables,
  FindWorkRequestQuery,
  TempAgency,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ShiftTable from '../ShiftTable/ShiftTable'

export const QUERY: TypedDocumentNode<
  AgenciesQuery,
  AgenciesQueryVariables
> = gql`
  query AgenciesQuery {
    tempAgencies {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<AgenciesQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tempAgencies,
  request,
}: CellSuccessProps<AgenciesQuery, AgenciesQueryVariables> & {
  selectedAgency?: TempAgency
  request: FindWorkRequestQuery['workRequest']
}) => {
  return <ShiftTable request={request} tempAgencies={tempAgencies} />
}
