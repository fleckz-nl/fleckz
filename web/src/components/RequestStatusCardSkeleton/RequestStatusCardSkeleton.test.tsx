import { render } from '@redwoodjs/testing/web'

import RequestStatusCardSkeleton from './RequestStatusCardSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RequestStatusCardSkeleton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RequestStatusCardSkeleton />)
    }).not.toThrow()
  })
})
