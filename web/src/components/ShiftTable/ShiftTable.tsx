import { useMemo } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { AgenciesQuery, FindWorkRequestQuery } from 'types/graphql'

import ShiftConfirmationDrawer from 'src/components/ShiftConfirmationDrawer/ShiftConfirmationDrawer'

import { DataTable } from '../DataTable/DataTable'
import SelectAgency from '../SelectAgency/SelectAgency'

type ShiftTableProps = {
  request: FindWorkRequestQuery['workRequest']
  tempAgencies: AgenciesQuery['tempAgencies']
}

const ShiftTable = ({ request, tempAgencies }: ShiftTableProps) => {
  const { shifts } = request
  const columns = useMemo<
    ColumnDef<FindWorkRequestQuery['workRequest']['shifts'][0]>[]
  >(
    () => [
      {
        // TODO: Batch-edit shifts
        accessorKey: 'id',
        header: ({ table }) => (
          <></>
          // <Checkbox
          //   checked={
          //     (table.getIsAllPageRowsSelected() ||
          //       (table.getIsSomePageRowsSelected() &&
          //         'indeterminate')) as boolean
          //   }
          //   onCheckedChange={(value) =>
          //     table.toggleAllPageRowsSelected(!!value)
          //   }
          //   aria-label="Select all"
          // />
        ),
        cell: ({ row }) => (
          <></>
          // <Checkbox
          //   checked={row.getIsSelected()}
          //   onCheckedChange={(value) => row.toggleSelected(!!value)}
          //   aria-label="Select row"
          // />
        ),
      },
      {
        accessorKey: 'name',
        header: 'Diensten',
        cell: ({ cell }) => <>{cell.getValue()}</>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
      },
      {
        accessorKey: 'tempAgency',
      },
      {
        accessorKey: 'agency',
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
        accessorKey: 'action',
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
        },
      }}
    />
  )
}

export default ShiftTable
