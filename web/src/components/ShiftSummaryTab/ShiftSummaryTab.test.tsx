import { render } from '@redwoodjs/testing/web'

import ShiftSummaryTab from './ShiftSummaryTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShiftSummaryTab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShiftSummaryTab />)
    }).not.toThrow()
  })
})
