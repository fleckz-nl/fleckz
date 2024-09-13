import type {
  ClientBusinessesQuery,
  ClientBusinessesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  ClientBusinessesQuery,
  ClientBusinessesQueryVariables
> = gql`
  query ClientBusinessesQuery {
    clientBusinesses {
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
  clientBusinesses,
}: CellSuccessProps<ClientBusinessesQuery>) => {
  return (
    <ul>
      {clientBusinesses.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
