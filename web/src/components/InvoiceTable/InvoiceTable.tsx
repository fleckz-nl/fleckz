import { Euro } from 'lucide-react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'src/components/ui/table'

const InvoiceTable = () => {
  return (
    <Table>
      <TableHeader className="bg-primary-foreground/30">
        <TableRow>
          <TableHead className="text-blue-950">Datum</TableHead>
          <TableHead className="text-blue-950">Werknemers</TableHead>
          <TableHead className="text-blue-950">Omschrijving</TableHead>
          <TableHead className="text-blue-950">Uurloon</TableHead>
          <TableHead className="text-blue-950">Uren</TableHead>
          <TableHead className="text-blue-950">Bedrag excl. BTW</TableHead>
          <TableHead className="text-blue-950">BTW</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="bg-gray-100">
          <TableCell>12-Okt-2024</TableCell>
          <TableCell>2</TableCell>
          <TableCell>ProjectNaam: FunctieNaam</TableCell>
          <TableCell>
            <Euro className="relative -top-0.5 inline size-3" />
            12,30
          </TableCell>
          <TableCell>10.00</TableCell>
          <TableCell className="min-w-36">
            <Euro className="relative -top-0.5 inline size-3" />
            147,43
          </TableCell>
          <TableCell>21%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default InvoiceTable
