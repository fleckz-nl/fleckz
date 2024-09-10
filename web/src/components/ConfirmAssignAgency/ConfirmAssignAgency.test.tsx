import { render } from '@redwoodjs/testing/web'

import ConfirmAssignAgency from './ConfirmAssignAgency'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmAssignAgency', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmAssignAgency />)
    }).not.toThrow()
  })
})
