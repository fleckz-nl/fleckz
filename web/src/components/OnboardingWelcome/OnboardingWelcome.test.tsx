import { render } from '@redwoodjs/testing/web'

import OnboardingWelcome from './OnboardingWelcome'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingWelcome', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingWelcome />)
    }).not.toThrow()
  })
})
