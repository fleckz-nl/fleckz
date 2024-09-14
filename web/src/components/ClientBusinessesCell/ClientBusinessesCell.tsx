import type {
  ClientBusinessesQuery,
  ClientBusinessesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import UpdateBusinessCard from 'src/components/UpdateBusinessCard/UpdateBusinessCard'

export const QUERY: TypedDocumentNode<
  ClientBusinessesQuery,
  ClientBusinessesQueryVariables
> = gql`
  query ClientBusinessesQuery {
    clientBusinesses {
      id
      name
      workplaces {
        id
        address {
          id
          street
          houseNumber
          houseNumberAddition
          city
          postalCode
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <>Geen bedrijven. </>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  clientBusinesses,
}: CellSuccessProps<ClientBusinessesQuery>) => {
  return (
    <>
      {clientBusinesses.map((b) => (
        <UpdateBusinessCard key={b.id} clientBusiness={b} />
      ))}
    </>
  )
}
