import { useMemo } from 'react'

import { ColumnDef } from '@tanstack/react-table'
import { AgenciesQuery, FindWorkRequestQuery } from 'types/graphql'

import { DataTable } from '../DataTable/DataTable'
import SelectAgency from '../SelectAgency/SelectAgency'
import { Checkbox } from '../ui/checkbox'

type ShiftTableProps = {
  request: FindWorkRequestQuery['workRequest']
  tempAgencies: AgenciesQuery['tempAgencies']
}

const ShiftTable = ({ request, tempAgencies }: ShiftTableProps) => {
  const { shifts } = request
  const columns: ColumnDef<FindWorkRequestQuery['workRequest']['shifts'][0]>[] =
    useMemo(
      () => [
        {
          accessorKey: 'id',
          header: ({ table }) => (
            <Checkbox
              checked={
                (table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() &&
                    'indeterminate')) as boolean
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
              aria-label="Select all"
            />
          ),
          cell: ({ row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
          ),
        },
        {
          accessorKey: 'shiftName',
          header: 'Ploegendienst',
          cell: ({ row }) => <>Ploegdienst {row.index + 1}</>,
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
