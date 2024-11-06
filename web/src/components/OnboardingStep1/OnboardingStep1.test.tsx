import { render } from '@redwoodjs/testing/web'

import OnboardingStep1 from './OnboardingStep1'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingStep1', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingStep1 />)
    }).not.toThrow()
  })
})
