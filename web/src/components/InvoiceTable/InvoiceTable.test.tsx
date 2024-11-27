import { render } from '@redwoodjs/testing/web'

import InvoiceTable from './InvoiceTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvoiceTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoiceTable />)
    }).not.toThrow()
  })
})
