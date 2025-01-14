import { render } from '@redwoodjs/testing/web'

import CandidatesPage from './CandidatesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CandidatesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CandidatesPage />)
    }).not.toThrow()
  })
})
