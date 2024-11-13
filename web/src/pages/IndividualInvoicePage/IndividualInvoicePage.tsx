// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const IndividualInvoicePage = () => {
  return (
    <>
      <Metadata
        title="IndividualInvoice"
        description="IndividualInvoice page"
      />

      <h1>IndividualInvoicePage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/IndividualInvoicePage/IndividualInvoicePage.tsx
        </code>
      </p>
      {/*
          My default route is named `individualInvoice`, link to me with:
          `<Link to={routes.individualInvoice()}>IndividualInvoice</Link>`
      */}
    </>
  )
}

export default IndividualInvoicePage
