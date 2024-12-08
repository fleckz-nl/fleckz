import { render } from '@redwoodjs/testing/web'

import OnboardingEmailAndPassword from './OnboardingEmailAndPassword'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingEmailAndPassword', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingEmailAndPassword />)
    }).not.toThrow()
  })
})
