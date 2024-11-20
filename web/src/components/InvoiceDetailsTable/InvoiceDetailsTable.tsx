import { Dot, Plus } from 'lucide-react'

import { Separator } from 'src/components/ui/separator'
import { Table, TableBody, TableCell, TableRow } from 'src/components/ui/table'

const InvoiceDetailsTable = () => {
  return (
    <>
      <Table className="mx-auto w-10/12">
        <TableBody className="bg-gray-100">
          <TableRow className="border-b-0 font-semibold">
            <TableCell className="py-0" colSpan={4}>
              Totaal gewerkte uren
            </TableCell>
            <TableCell className="py-0">10.00</TableCell>
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="py-0" colSpan={2}>
              Toeslag ploegendienst
            </TableCell>
            <TableCell className="py-0">€ 12,82</TableCell>
            <TableCell className="py-0">20%</TableCell>
            <TableCell className="py-0">4.00</TableCell>
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="py-0" colSpan={2}>
              Toeslag ploegendienst
            </TableCell>
            <TableCell className="py-0">€ 12,82</TableCell>
            <TableCell className="py-0">30%</TableCell>
            <TableCell className="py-0">1.00</TableCell>
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="py-0" colSpan={2}>
              Toeslag ploegendienst
            </TableCell>
            <TableCell className="py-0">€ 12,82</TableCell>
            <TableCell className="py-0">40%</TableCell>
            <TableCell className="py-0">1.00</TableCell>
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="py-8" colSpan={5} />
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="py-0" colSpan={4}>
              Bruto loon uren
            </TableCell>
            <TableCell className="py-0 pl-10">
              <Dot className="ml-4 mr-1 inline size-3 text-transparent" />€
              128,20
            </TableCell>
          </TableRow>
          <TableRow className="border-b-0">
            <TableCell className="py-0" colSpan={4}>
              Bruto loon toeslagen
            </TableCell>
            <TableCell className="py-0 pl-10">
              <Plus className="ml-4 mr-1 inline size-3" />€ 19,23
            </TableCell>
          </TableRow>
          <TableRow className="border-b-0 font-semibold">
            <TableCell className="py-0" colSpan={4}>
              Totaal bruto loon
            </TableCell>
            <TableCell className="py-0 pl-10">
              <Dot className="ml-4 mr-1 inline size-3 text-transparent" />€
              147,43
              <Separator className="relative -top-[19px] left-4 w-24 bg-primary/30" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  )
}

export default InvoiceDetailsTable
