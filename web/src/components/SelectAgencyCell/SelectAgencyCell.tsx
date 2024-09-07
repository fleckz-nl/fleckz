import { ChevronsUpDown } from 'lucide-react'
import type { AgenciesQuery, AgenciesQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'

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

export const Loading = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Skeleton className="h-8 min-w-40" />
    </DropdownMenuTrigger>
  </DropdownMenu>
)

export const Empty = () => <div>No Agencies Found</div>

export const Failure = ({
  error,
}: CellFailureProps<AgenciesQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  tempAgencies,
}: CellSuccessProps<AgenciesQuery, AgenciesQueryVariables>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {'Kies uitzendbureau...'} <ChevronsUpDown className="inline size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {tempAgencies.map((agency) => (
          <DropdownMenuItem key={agency.id}>{agency.name}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
