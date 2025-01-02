import { render } from '@redwoodjs/testing/web'

import OnboardingPlanWork from './OnboardingPlanWork'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingPlanWork', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingPlanWork />)
    }).not.toThrow()
  })
})
