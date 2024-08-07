import { render } from '@redwoodjs/testing/web'

import JobProfilesPage from './JobProfilesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('JobProfilesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<JobProfilesPage />)
    }).not.toThrow()
  })
})
