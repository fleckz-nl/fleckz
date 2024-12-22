import { render } from '@redwoodjs/testing/web'

import OnboardingSuccess from './OnboardingSuccess'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingSuccess', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingSuccess />)
    }).not.toThrow()
  })
})
