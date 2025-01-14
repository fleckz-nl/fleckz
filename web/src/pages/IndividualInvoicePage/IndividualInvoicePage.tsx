import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import InvoiceHeader from 'src/components/InvoiceHeader/InvoiceHeader'
import InvoiceTable from 'src/components/InvoiceTable/InvoiceTable'
import { Button } from 'src/components/ui/button'

type IndividualInvoicePageProps = { id: number; paid: string }

const IndividualInvoicePage = ({ id, paid }: IndividualInvoicePageProps) => {
  console.log(paid)
  console.log(typeof paid)

  return (
    <>
      <Metadata
        title="IndividualInvoice"
        description="IndividualInvoice page"
      />
      <main className="container mx-auto rounded-lg bg-white p-6 shadow-lg">
        {id}
        <InvoiceHeader />
        <InvoiceTable />
        <div className="flex justify-end gap-2 pt-8">
          {paid === 'true' ? (
            <Button
              variant="outline"
              className="self-end text-primary"
              onClick={() => {
                window.location.href = routes.invoice()
              }}
            >
              Terug
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                className="self-end text-primary"
                onClick={() => {
                  window.location.href = routes.invoice()
                }}
              >
                Betaal later
              </Button>
              <Button variant="accent" className="rounded-sm text-primary">
                Betaal nu
              </Button>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default IndividualInvoicePage
