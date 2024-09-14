import type {
  TempAgenciesQuery,
  TempAgenciesQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import TempAgencyCard from '../TempAgencyCard/TempAgencyCard'

export const QUERY: TypedDocumentNode<
  TempAgenciesQuery,
  TempAgenciesQueryVariables
> = gql`
  query TempAgenciesQuery {
    tempAgencies {
      id
      name
      phone
      email
      address {
        street
        houseNumber
        houseNumberAddition
        postalCode
        city
        province
        country
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
  tempAgencies,
}: CellSuccessProps<TempAgenciesQuery>) => {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {tempAgencies.map((item) => {
        return (
          <li key={item.id}>
            <TempAgencyCard item={item} />
          </li>
        )
      })}
    </ul>
  )
}
