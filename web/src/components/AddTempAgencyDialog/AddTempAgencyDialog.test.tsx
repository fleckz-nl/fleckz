import { render } from '@redwoodjs/testing/web'

import AddTempAgencyDialog from './AddTempAgencyDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddTempAgencyDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddTempAgencyDialog />)
    }).not.toThrow()
  })
})
