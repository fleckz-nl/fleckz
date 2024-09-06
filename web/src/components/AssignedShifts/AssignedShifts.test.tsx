import { render } from '@redwoodjs/testing/web'

import AssignedShifts from './AssignedShifts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AssignedShifts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssignedShifts />)
    }).not.toThrow()
  })
})
