import { Metadata } from '@redwoodjs/web'

import InvoiceHeader from 'src/components/InvoiceHeader/InvoiceHeader'

const IndividualInvoicePage = () => {
  return (
    <>
      <Metadata
        title="IndividualInvoice"
        description="IndividualInvoice page"
      />
      <main className="container mx-auto rounded-lg bg-white p-6 shadow-lg">
        <InvoiceHeader />
      </main>
    </>
  )
}

export default IndividualInvoicePage
