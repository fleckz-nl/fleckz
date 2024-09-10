import { render } from '@redwoodjs/testing/web'

import ShiftTable from './ShiftTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShiftTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShiftTable />)
    }).not.toThrow()
  })
})
