import { render } from '@redwoodjs/testing/web'

import WorkRequestPage from './WorkRequestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkRequestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkRequestPage />)
    }).not.toThrow()
  })
})
