import type { FindInvoiceQuery, FindInvoiceQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindInvoiceQuery,
  FindInvoiceQueryVariables
> = gql`
  query FindInvoiceQuery($id: Int!) {
    invoice: invoice(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInvoiceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  invoice,
}: CellSuccessProps<FindInvoiceQuery, FindInvoiceQueryVariables>) => {
  return <div>{JSON.stringify(invoice)}</div>
}
