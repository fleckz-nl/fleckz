import { render } from '@redwoodjs/testing/web'

import IndividualInvoicePage from './IndividualInvoicePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('IndividualInvoicePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualInvoicePage />)
    }).not.toThrow()
  })
})
