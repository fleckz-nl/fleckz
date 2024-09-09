import { render } from '@redwoodjs/testing/web'

import BusinessAddressCell from './BusinessAddressCell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BusinessAddressCell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessAddressCell />)
    }).not.toThrow()
  })
})
