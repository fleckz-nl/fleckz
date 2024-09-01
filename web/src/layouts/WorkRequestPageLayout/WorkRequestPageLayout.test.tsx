import { render } from '@redwoodjs/testing/web'

import WorkRequestPageLayout from './WorkRequestPageLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkRequestPageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkRequestPageLayout />)
    }).not.toThrow()
  })
})
