import { render } from '@redwoodjs/testing/web'

import AddBusinessDialog from './AddBusinessDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddAddressDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddBusinessDialog />)
    }).not.toThrow()
  })
})
