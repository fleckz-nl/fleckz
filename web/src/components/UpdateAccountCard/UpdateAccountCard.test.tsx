import { render } from '@redwoodjs/testing/web'

import UpdateAccountCard from './UpdateAccountCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateAccountCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateAccountCard />)
    }).not.toThrow()
  })
})
