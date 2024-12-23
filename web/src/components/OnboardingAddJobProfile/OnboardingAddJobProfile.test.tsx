import { render } from '@redwoodjs/testing/web'

import OnboardingAddJobProfile from './OnboardingAddJobProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingAddJobProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingAddJobProfile />)
    }).not.toThrow()
  })
})
