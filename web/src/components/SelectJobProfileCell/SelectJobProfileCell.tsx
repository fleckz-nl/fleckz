import { useState } from 'react'

import { Check, ChevronsUpDown } from 'lucide-react'
import type { JobProfilesQuery, JobProfilesQueryVariables } from 'types/graphql'

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

export const QUERY: TypedDocumentNode<
  JobProfilesQuery,
  JobProfilesQueryVariables
> = gql`
  query SelectJobProfileQuery {
    jobProfiles {
      id
      name
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
  jobProfiles,
  className,
  form,
  field,
}: CellSuccessProps<JobProfilesQuery> & SuccessProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
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
              {field.value
                ? jobProfiles.find((profile) => profile.id === field.value)
                    ?.name
                : 'Selecteer functieprofiel...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command className="bg-foreground text-muted-foreground">
            <CommandInput placeholder="Zoek profiel..." />
            <CommandList>
              <CommandEmpty>
                Geen profiel gevonden.{' '}
                <Link
                  to={routes.jobProfiles()}
                  className="hover:underline"
                  target="_blank"
                >
                  Maak er een aan.
                </Link>
              </CommandEmpty>
              <CommandGroup>
                {jobProfiles.map((profile) => (
                  <CommandItem
                    key={profile.id}
                    value={profile.name}
                    onSelect={(currentValue) => {
                      const selectedJobId = jobProfiles.find(
                        (p) => p.name === currentValue
                      ).id

                      form.setValue(
                        field.name,
                        currentValue === field.value ? '' : selectedJobId
                      )
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        field.value === profile.id ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {profile.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}
