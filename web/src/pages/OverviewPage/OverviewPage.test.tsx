import { render } from '@redwoodjs/testing/web'

import OverviewPage from './OverviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OverviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OverviewPage />)
    }).not.toThrow()
  })
})
