import { render } from '@redwoodjs/testing/web'

import OnboardingFinancial from './OnboardingFinancial'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingFinancial', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingFinancial setOnboardingStep={() => {}} />)
    }).not.toThrow()
  })
})
