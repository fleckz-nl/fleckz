import { render } from '@redwoodjs/testing/web'

import PlanPage from './PlanPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanPage />)
    }).not.toThrow()
  })
})
