import { render } from '@redwoodjs/testing/web'

import AddAddressDialog from './AddAddressDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddAddressDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddAddressDialog />)
    }).not.toThrow()
  })
})
