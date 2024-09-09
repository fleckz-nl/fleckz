import { useState } from 'react'

import { CommandEmpty } from 'cmdk'
import { Check, ChevronsUpDown } from 'lucide-react'
import type {
  AgenciesQuery,
  FindWorkRequestQuery,
  TempAgency,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from 'src/components/ui/command'
import { cn } from 'src/lib/utils'

import ConfirmAssignAgency from '../ConfirmAssignAgency/ConfirmAssignAgency'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { QUERY } from '../WorkRequestCell'

const UPDATE_SHIFT = gql`
  mutation updateShift($id: String!, $input: UpdateShiftInput!) {
    updateShift(id: $id, input: $input) {
      id
      status
      tempAgency {
        id
      }
    }
  }
`

const UNASSIGN_AGENCY = gql`
  mutation unassignAgency($id: String!) {
    unassignAgency(id: $id) {
      id
    }
  }
`

const SelectAgency = ({
  tempAgencies,
  selectedAgency,
  shiftId,
  request,
}: {
  tempAgencies: AgenciesQuery['tempAgencies']
  selectedAgency?: TempAgency
  shiftId: string
  request: FindWorkRequestQuery['workRequest']
}) => {
  const [open, setOpen] = useState(false)
  const [agencyId, setAgencyId] = useState(selectedAgency?.id || '')
  const [confirmOpen, setConfirmOpen] = useState(false)

  const [updateShift] = useMutation(UPDATE_SHIFT, {
    refetchQueries: [{ query: QUERY, variables: { id: request.id } }],
  })

  const [unassignAgency] = useMutation(UNASSIGN_AGENCY, {
    refetchQueries: [{ query: QUERY, variables: { id: request.id } }],
  })

  async function handleAgencyChange(agencyId: string) {
    const loadingSpinner = toast.loading('Laden...')
    if (agencyId == '') {
      await unassignAgency({
        variables: {
          id: shiftId,
        },
        onCompleted: () => toast.success('Uitzendbureau niet toegewezen'),
      })
    } else {
      await updateShift({
        variables: {
          id: shiftId,
          input: { tempAgencyId: agencyId, status: 'FULFILLED' },
        },
        onCompleted: () => toast.success('Bijgewerkte opdracht'),
      })
    }
    toast.dismiss(loadingSpinner)
  }

  function handleCommandItemSelect(currentValue: string) {
    if (currentValue === agencyId) {
      setOpen(false)
      setConfirmOpen(true)
      setAgencyId('')
    } else {
      setConfirmOpen(true)
      setAgencyId(currentValue)
      setOpen(false)
    }
  }

  return (
    <>
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
                  onSelect={handleCommandItemSelect}
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
      <ConfirmAssignAgency
        hideTrigger
        open={confirmOpen}
        onOpenChange={() => setConfirmOpen((e) => !e)}
        onConfirm={() => handleAgencyChange(agencyId)}
        onCancel={() => {
          setAgencyId(selectedAgency?.id || '')
        }}
        newAgency={tempAgencies.find((a) => a.id === agencyId)?.name}
      />
    </>
  )
}

export default SelectAgency
