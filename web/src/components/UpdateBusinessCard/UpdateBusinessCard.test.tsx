import { render } from '@redwoodjs/testing/web'

import UpdateBusinessCard from './UpdateBusinessCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateBusinessCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateBusinessCard />)
    }).not.toThrow()
  })
})
