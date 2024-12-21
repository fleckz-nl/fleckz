import { render } from '@redwoodjs/testing/web'

import AddBranch from './AddBranch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddBranch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddBranch setOnboardingStep={() => {}} />)
    }).not.toThrow()
  })
})
