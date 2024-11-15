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
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default InvoiceTable
