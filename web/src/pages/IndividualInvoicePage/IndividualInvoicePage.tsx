import { Metadata } from '@redwoodjs/web'

import InvoiceHeader from 'src/components/InvoiceHeader/InvoiceHeader'
import InvoiceTable from 'src/components/InvoiceTable/InvoiceTable'

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
    </>
  )
}

export default IndividualInvoicePage
