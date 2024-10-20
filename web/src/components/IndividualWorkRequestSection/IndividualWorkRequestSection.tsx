import { useMemo } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { format } from 'date-fns/format'
import { Users } from 'lucide-react'
import { WorkRequestsTodayQuery } from 'types/graphql'

import ShiftConfirmationDrawer from 'src/components/ShiftConfirmationDrawer/ShiftConfirmationDrawer'
import TempAgencyWorker from 'src/components/TempAgencyWorker'
import TodayShiftsTable from 'src/components/TodayShiftsTable/TodayShiftsTable'
import { Checkbox } from 'src/components/ui/checkbox'
import { Separator } from 'src/components/ui/separator'
import { formatInterval } from 'src/lib/formatInterval'

type IndividualWorkRequestSectionProps = {
  workRequest: WorkRequestsTodayQuery['workRequestsToday'][0]
}

const IndividualWorkRequestSection = ({
  workRequest,
}: IndividualWorkRequestSectionProps) => {
  const columns = useMemo<
    ColumnDef<WorkRequestsTodayQuery['workRequestsToday'][0]['shifts'][0]>[]
  >(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            className="border-primary-foreground bg-black/20 hover:bg-secondary"
            checked={
              (table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() &&
                  'indeterminate')) as boolean
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Selecteer alle"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            className="border-primary-foreground bg-black/20 hover:bg-secondary"
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Selecteer rij"
          />
        ),
        enableSorting: false,
      },
      {
        id: 'name',
        header: () => (
          <div className="absolute left-10 top-2.5 flex gap-1">
            <span>{workRequest?.shifts?.length}</span>
            <span>medewerkers</span>
          </div>
        ),
        cell: ({ row }) => (
          <TempAgencyWorker
            workerName={row.original.workerName}
            tempAgencyName={row.original.tempAgency?.name}
            className="text-white/90"
          />
        ),
      },
      {
        id: 'checkIn',
        cell: ({ row }) => <ShiftConfirmationDrawer shift={row.original} />,
        header: () => null,
      },
    ],
    [workRequest]
  )
  return (
    <section className="mb-20">
      <Separator className="mt-4 bg-primary-foreground/20" />
      <h3 className="center mt-2 gap-2 text-center">
        <div
          className="flex gap-1"
          title={formatInterval(
            new Date(workRequest.startDate),
            new Date(workRequest.endDate)
          )}
        >
          <span>{format(workRequest.startDate, 'HH:mm')}</span>
          <span>-</span>
          <span>{format(workRequest.endDate, 'HH:mm')}</span>
        </div>
        <Separator
          orientation="vertical"
          className="h-4 w-[2px] bg-accent/20"
        />
        <span>{workRequest.jobProfile.name}</span>
      </h3>
      <div className="center gap-1">
        <span>{workRequest.shifts?.length}</span>
        <Users className="size-5" />
      </div>

      <TodayShiftsTable data={workRequest.shifts} columns={columns} />
    </section>
  )
}

export default IndividualWorkRequestSection
