import { render } from '@redwoodjs/testing/web'

import OverviewCardsSkeleton from './OverviewCardsSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OverviewCardsSkeleton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OverviewCardsSkeleton />)
    }).not.toThrow()
  })
})
