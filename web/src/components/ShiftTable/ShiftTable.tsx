import { ShiftStatus } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'
import { ChevronsUpDown } from 'lucide-react'

import { DataTable } from '../DataTable/DataTable'
import { Checkbox } from '../ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export type Shift = {
  id: string
  shiftName: string
  status: ShiftStatus
  agency: string
}

export const columns: ColumnDef<Shift>[] = [
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
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'agency',
    header: 'Uitzendbureau',
    cell: ({ row }) => {
      const isFulfilled =
        (row.getValue('status') as string) === ShiftStatus['FULFILLED']
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            {isFulfilled ? '' : 'Kies uitzendbureau...'}{' '}
            <ChevronsUpDown className="inline size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>one</DropdownMenuItem>
            <DropdownMenuItem>two</DropdownMenuItem>
            <DropdownMenuItem>three</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const ShiftTable = ({ data }) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      initialState={{
        columnVisibility: {
          status: false,
        },
      }}
    />
  )
}

export default ShiftTable
