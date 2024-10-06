import { render } from '@redwoodjs/testing/web'

import TableSkeleton from './TableSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TableSkeleton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TableSkeleton />)
    }).not.toThrow()
  })
})
