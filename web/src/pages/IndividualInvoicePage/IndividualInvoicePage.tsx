import { Metadata } from '@redwoodjs/web'

import InvoiceHeader from 'src/components/InvoiceHeader/InvoiceHeader'
import InvoiceTable from 'src/components/InvoiceTable/InvoiceTable'
import { Button } from 'src/components/ui/button'

const IndividualInvoicePage = () => {
  return (
    <>
      <Metadata
        title="IndividualInvoice"
        description="IndividualInvoice page"
      />
      <main className="container mx-auto rounded-lg bg-white p-6 shadow-lg">
        <InvoiceHeader />
        <InvoiceTable />
        <div className="flex justify-end gap-2 pt-8">
          <Button className="rounded-sm">Betaal nu</Button>
          <Button variant="outline" className="rounded-sm">
            Betaal later
          </Button>
        </div>
      </main>
    </>
  )
}

export default IndividualInvoicePage
