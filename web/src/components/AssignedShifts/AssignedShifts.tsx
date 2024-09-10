import { useMemo } from 'react'

import { Mail, MapPin, Phone, Users } from 'lucide-react'
import { TempAgency, WorkRequestsQuery } from 'types/graphql'

import { formatAddress } from 'src/lib/formatAddress'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Separator } from '../ui/separator'

type AssignedShiftsProps = {
  request: WorkRequestsQuery['workRequests'][0]
  className?: string
}

const AssignedShifts = ({ className, request }: AssignedShiftsProps) => {
  const agenciesWithShiftCounts: (TempAgency & { count: number })[] =
    useMemo(() => {
      const { shifts } = request
      if (shifts == null) return []
      return shifts.reduce((acc, current) => {
        const currentAgencyId = current.tempAgency?.id
        const existingAgency = acc.find(
          (agency) => agency.id === currentAgencyId
        )

        if (existingAgency) {
          existingAgency.count++
        } else {
          acc.push({
            ...current.tempAgency,
            count: 1,
          })
        }
        return acc
      }, [])
    }, [request])

  return (
    <>
      <div className={className}>
        <Separator className="opacity-40" />
        <div className="flex items-center gap-1">
          <Users />
          <h3>Toegewezen medewerkers</h3>
        </div>
        <div className="ml-10 flex flex-col gap-2">
          {agenciesWithShiftCounts.map((agency) => {
            if (agency.id == null) return
            return (
              <div
                key={agency.id}
                className="flex items-center gap-5 font-semibold"
              >
                {agency.count} <span className="text-sm font-normal">van</span>
                <Popover>
                  <PopoverTrigger className="hover:underline">
                    {agency.name}
                  </PopoverTrigger>
                  <PopoverContent
                    side="top"
                    className="my-1 min-w-fit rounded-md bg-gray-900 px-4 py-2 text-sm text-primary-foreground"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="mb-1 text-accent">{agency.name}</h3>
                      <div className="flex items-center gap-1">
                        <MapPin className="size-4" />
                        {formatAddress(agency.address)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Phone className="size-4" />
                        <a href={`tel:${agency.phone}`}>{agency.phone}</a>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="size-4" />
                        <a href={`mailto:${agency.email}`}>{agency.email}</a>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default AssignedShifts
