import { render } from '@redwoodjs/testing/web'

import OnboardingAvatarAndName from './OnboardingAvatarAndName'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OnboardingAvatarAndName', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OnboardingAvatarAndName />)
    }).not.toThrow()
  })
})
