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
      <TableHeader>
        <TableRow>
          <TableHead>Datum</TableHead>
          <TableHead>Werknemers</TableHead>
          <TableHead>Omschrijving</TableHead>
          <TableHead>Uurloon</TableHead>
          <TableHead>Uren</TableHead>
          <TableHead>Bedrag excl. BTW</TableHead>
          <TableHead>BTW</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>12-Okt-2024</TableCell>
          <TableCell>2</TableCell>
          <TableCell>ProjectNaam: FunctieNaam</TableCell>
          <TableCell>
            <Euro />
            12,30
          </TableCell>
          <TableCell>10.00</TableCell>
          <TableCell>
            <Euro />
            147,43
          </TableCell>
          <TableCell>21%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default InvoiceTable
