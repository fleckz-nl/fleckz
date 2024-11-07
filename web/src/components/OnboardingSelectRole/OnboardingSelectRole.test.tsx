import { render } from '@redwoodjs/testing/web'

import OnboardingSelectRole from './OnboardingSelectRole'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingSelectRole', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingSelectRole />)
    }).not.toThrow()
  })
})
