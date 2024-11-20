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
      </main>
      <div className="flex w-full justify-end gap-2 py-4">
        <Button className="rounded-sm">Betaal nu</Button>
        <Button variant="secondary" className="rounded-sm">
          Betaal later
        </Button>
      </div>
    </>
  )
}

export default IndividualInvoicePage
