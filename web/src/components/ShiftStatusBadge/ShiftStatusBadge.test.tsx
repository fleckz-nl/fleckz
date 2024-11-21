import { render } from '@redwoodjs/testing/web'

import ShiftStatusBadge from './ShiftStatusBadge'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShiftStatusBadge', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShiftStatusBadge />)
    }).not.toThrow()
  })
})
