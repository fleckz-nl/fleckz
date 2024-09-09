import { render } from '@redwoodjs/testing/web'

import UpdateAvatar from './UpdateAvatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateAvatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateAvatar />)
    }).not.toThrow()
  })
})
