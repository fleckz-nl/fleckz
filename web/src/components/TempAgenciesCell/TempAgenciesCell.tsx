import type {
  TempAgenciesQuery,
  TempAgenciesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  TempAgenciesQuery,
  TempAgenciesQueryVariables
> = gql`
  query TempAgenciesQuery {
    tempAgencies {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tempAgencies,
}: CellSuccessProps<TempAgenciesQuery>) => {
  return (
    <ul>
      {tempAgencies.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
