import { useState } from 'react'

import { CommandEmpty } from 'cmdk'
import { Check, ChevronsUpDown } from 'lucide-react'
import type {
  AgenciesQuery,
  AgenciesQueryVariables,
  TempAgency,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { cn } from 'src/lib/utils'

import { Button } from '../ui/button'
import { Command, CommandInput, CommandItem, CommandList } from '../ui/command'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
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
  selectedAgency,
}: CellSuccessProps<AgenciesQuery, AgenciesQueryVariables> & {
  selectedAgency?: TempAgency
}) => {
  const [open, setOpen] = useState(false)
  const [agencyId, setAgencyId] = useState(selectedAgency?.id || '')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="gap-2 hover:bg-white/40">
        <Button variant="outline" role="combobox" aria-expanded={open}>
          {tempAgencies.find((agency) => agency.id === agencyId)?.name ||
            'Kies uitzendbureau...'}
          <ChevronsUpDown className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Zoek..." />
          <CommandList>
            <CommandEmpty className="text-sm text-red-700">
              Geen bureau gevonden.
            </CommandEmpty>
            {tempAgencies.map((agency) => (
              <CommandItem
                key={agency.id}
                value={agency.id}
                onSelect={(currentValue) => {
                  setAgencyId(currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    agencyId === agency.id ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {agency.name}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
