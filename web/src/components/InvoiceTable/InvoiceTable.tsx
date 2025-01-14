import InvoiceDetailsTable from 'src/components/InvoiceDetailsTable/InvoiceDetailsTable'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'src/components/ui/accordion'
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
          <TableHead className="text-blue-950">Werker ID</TableHead>
          <TableHead className="text-blue-950">Werknemer Naam</TableHead>
          <TableHead className="text-blue-950">Omschrijving</TableHead>
          <TableHead className="text-blue-950">Uurloon</TableHead>
          <TableHead className="text-blue-950">Uren</TableHead>
          <TableHead className="text-blue-950">Bedrag excl. BTW</TableHead>
          <TableHead className="text-blue-950">BTW</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="border-b-0 bg-gray-100">
          <TableCell className="text-secondary">
            12-Okt-2024 <br /> 13:30-23:30
          </TableCell>
          <TableCell className="font-semibold text-secondary">098765</TableCell>
          <TableCell>Hans van Manus</TableCell>
          <TableCell>ProjectNaam: FunctieNaam</TableCell>
          <TableCell>€ 12,30</TableCell>
          <TableCell>10.00</TableCell>
          <TableCell className="min-w-36">€ 147,43</TableCell>
          <TableCell>21%</TableCell>
        </TableRow>
        <TableRow className="border-b-0 bg-gray-100">
          <TableCell colSpan={8}>
            <Accordion type="single" collapsible>
              <AccordionItem value="invoice-details" className="border-b-0">
                <AccordionTrigger className="justify-end gap-2 py-0">
                  Zie meer details
                </AccordionTrigger>
                <AccordionContent>
                  <InvoiceDetailsTable />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={8} className="w-full">
            <div className="gap-4 space-y-2 text-right">
              <p>
                Subtotaal excl. BTW{' '}
                <span className="float-right ml-8">€ 147,43</span>
              </p>
              <p>
                Totaal BTW 21% <span className="float-right ml-8">€ 30,96</span>
              </p>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={8} className="w-full bg-secondary/30">
            <div className="gap-4 space-y-2 text-right font-bold">
              <p>
                Totaal te betalen incl. BTW{' '}
                <span className="float-right ml-8">€ 178,39</span>
              </p>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default InvoiceTable
