import { ColumnDef } from '@tanstack/react-table'
import { FindWorkRequestQuery } from 'types/graphql'

import { DataTable } from '../DataTable/DataTable'
import SelectAgencyCell from '../SelectAgencyCell'
import { Checkbox } from '../ui/checkbox'

export const columns: ColumnDef<ShiftTableProps['data'][0]>[] = [
  {
    accessorKey: 'id',
    header: ({ table }) => (
      <Checkbox
        checked={
          (table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')) as boolean
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
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
    header: 'Shift',
    cell: ({ row }) => <>Shift {row.index + 1}</>,
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
      <SelectAgencyCell selectedAgency={row.getValue('tempAgency')} />
    ),
  },
]

type ShiftTableProps = {
  data: FindWorkRequestQuery['workRequest']['shifts']
}

const ShiftTable = ({ data }: ShiftTableProps) => {
  return (
    <DataTable
      columns={columns}
      data={data}
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
