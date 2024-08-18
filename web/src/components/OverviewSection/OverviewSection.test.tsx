import { render } from '@redwoodjs/testing/web'

import OverviewSection from './OverviewSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OverviewSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OverviewSection />)
    }).not.toThrow()
  })
})
