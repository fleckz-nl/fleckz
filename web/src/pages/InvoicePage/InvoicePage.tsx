// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const InvoicePage = () => {
  return (
    <>
      <Metadata title="Invoice" description="Invoice page" />

      <h1>InvoicePage</h1>
      <p>
        Find me in <code>./web/src/pages/InvoicePage/InvoicePage.tsx</code>
      </p>
      {/*
          My default route is named `invoice`, link to me with:
          `<Link to={routes.invoice()}>Invoice</Link>`
      */}
    </>
  )
}

export default InvoicePage
