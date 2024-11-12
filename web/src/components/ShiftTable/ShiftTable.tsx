import { useMemo } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { AgenciesQuery, FindWorkRequestQuery } from 'types/graphql'

import { useAuth } from 'src/auth'
import AssignShiftWorkerDialog from 'src/components/AssignShiftWorkerDialog/AssignShiftWorkerDialog'
import ShiftConfirmationDrawer from 'src/components/ShiftConfirmationDrawer/ShiftConfirmationDrawer'
import { formatShiftId } from 'src/lib/formatShiftId'

import { DataTable } from '../DataTable/DataTable'
import SelectAgency from '../SelectAgency/SelectAgency'

type ShiftTableProps = {
  request: FindWorkRequestQuery['workRequest']
  tempAgencies: AgenciesQuery['tempAgencies']
}

const ShiftTable = ({ request, tempAgencies }: ShiftTableProps) => {
  const { currentUser } = useAuth()

  const assignWorkerRoles = [
    'ADMIN',
    'TEMP_AGENCY_REP',
  ] as typeof currentUser.roles
  const showAssignWorkerAction = currentUser.roles.some((role) =>
    assignWorkerRoles.includes(role)
  )

  const checkInOutRoles = ['ADMIN', 'CLIENT'] as typeof currentUser.roles
  const showCheckInOutAction = currentUser.roles.some((role) =>
    checkInOutRoles.includes(role)
  )

  const assignTempAgencyRoles = ['ADMIN'] as typeof currentUser.roles
  const showAssignTempAgencyAction = currentUser.roles.some((role) =>
    assignTempAgencyRoles.includes(role)
  )

  const { shifts } = request
  const columns = useMemo<
    ColumnDef<FindWorkRequestQuery['workRequest']['shifts'][0]>[]
  >(
    () => [
      {
        // TODO: Batch-edit shifts
        accessorKey: 'id',
        header: 'ID',
        cell: ({ cell }) => (
          <span className="font-mono uppercase">
            {formatShiftId(cell.getValue() as string)}
          </span>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'tempAgency',
      },
      {
        accessorKey: 'assignTempAgency',
        header: 'Uitzendbureau',
        cell: ({ row }) => (
          <SelectAgency
            tempAgencies={tempAgencies}
            selectedAgency={row.getValue('tempAgency')}
            shiftId={row.getValue('id')}
            request={request}
          />
        ),
      },
      {
        accessorKey: 'assignWorker',
        header: 'Werknemer',
        cell: ({ row }) => <AssignShiftWorkerDialog shift={row.original} />,
      },
      {
        accessorKey: 'checkInOut',
        header: 'In/uit-checken',
        cell: ({ row }) => <ShiftConfirmationDrawer shift={row.original} />,
      },
    ],
    [tempAgencies, request]
  )

  return (
    <DataTable
      columns={columns}
      data={shifts}
      initialState={{
        columnVisibility: {
          status: false,
          tempAgency: false,
          assignTempAgency: showAssignTempAgencyAction,
          assignWorker: showAssignWorkerAction,
          checkInOut: showCheckInOutAction,
        },
      }}
    />
  )
}

export default ShiftTable
