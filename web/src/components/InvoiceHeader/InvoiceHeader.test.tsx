import { render } from '@redwoodjs/testing/web'

import InvoiceHeader from './InvoiceHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InvoiceHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InvoiceHeader />)
    }).not.toThrow()
  })
})
