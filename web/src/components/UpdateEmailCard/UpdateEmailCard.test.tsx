import { render } from '@redwoodjs/testing/web'

import UpdateEmailCard from './UpdateEmailCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateEmailCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateEmailCard />)
    }).not.toThrow()
  })
})
