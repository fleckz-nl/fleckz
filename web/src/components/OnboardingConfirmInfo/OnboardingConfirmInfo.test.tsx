import { render } from '@redwoodjs/testing/web'

import OnboardingConfirmInfo from './OnboardingConfirmInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingConfirmInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingConfirmInfo />)
    }).not.toThrow()
  })
})
