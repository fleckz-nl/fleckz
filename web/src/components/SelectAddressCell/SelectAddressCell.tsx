import { useMemo, useState } from 'react'

import { Check, ChevronsUpDown } from 'lucide-react'
import type {
  Address,
  AddressesQuery,
  AddressesQueryVariables,
} from 'types/graphql'

import { ControllerRenderProps, UseFormReturn } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import { cn } from 'src/lib/utils'

import { Button } from '../ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command'
import { FormControl } from '../ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Skeleton } from '../ui/skeleton'

export const QUERY: TypedDocumentNode<AddressesQuery> = gql`
  query AddressesQuery {
    addresses {
      id
      street
      houseNumber
      houseNumberAddition
      postalCode
      city
      province
      country
    }
  }
`

export const Loading = () => (
  <Popover>
    <PopoverTrigger
      asChild
      className="relative -top-4 w-full bg-primary/10 py-4"
    >
      <FormControl>
        <Button
          variant="outline"
          role="combobox"
          className="justify-between text-primary/70"
        >
          <Skeleton className="bg-transparent">Loading...</Skeleton>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </FormControl>
    </PopoverTrigger>
  </Popover>
)

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

type SuccessProps = {
  className?: string
  field: ControllerRenderProps
  form: UseFormReturn
}

export const Success = ({
  addresses,
  className,
  form,
  field,
}: CellSuccessProps<AddressesQuery, AddressesQueryVariables> &
  SuccessProps) => {
  const [open, setOpen] = useState(false)
  const currentAddressString = useMemo(() => {
    if (field.value == '') return
    const currentAddress = addresses.find((a) => a.id === field.value)
    return formatToOneLine(currentAddress)
  }, [field, addresses])

  function formatToOneLine(
    address: Omit<Address, 'createdAt' | 'updatedAt' | 'workRequest'>
  ) {
    if (address == null) return
    const { street, houseNumber, houseNumberAddition, city, postalCode } =
      address
    return `${street} ${houseNumber}${
      houseNumberAddition ? houseNumberAddition : ''
    }, ${postalCode} ${city}`
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className={cn(className, 'w-full')}
        disabled={field.disabled}
        onBlur={field.onBlur}
      >
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="justify-between text-primary/70"
          >
            {field.value ? currentAddressString : 'Selecteer locatie...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="bg-foreground text-muted-foreground">
          <CommandInput placeholder="Zoek adres..." />
          <CommandList>
            <CommandEmpty>
              Geen adres gevonden{' '}
              <Link to={routes.business()} className="hover:underline">
                Maak er een aan.
              </Link>
            </CommandEmpty>

            <CommandGroup>
              {addresses.map((address) => (
                <CommandItem
                  key={address.id}
                  value={formatToOneLine(address)}
                  onSelect={(currentValue) => {
                    const selectedAddressId = addresses.find(
                      (address) => formatToOneLine(address) === currentValue
                    ).id

                    form.setValue(
                      field.name,
                      currentValue === field.value ? '' : selectedAddressId
                    )
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      field.value === address.id ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {formatToOneLine(address)}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
