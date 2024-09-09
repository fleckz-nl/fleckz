import { render } from '@redwoodjs/testing/web'

import UpdatePasswordCard from './UpdatePasswordCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdatePasswordCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdatePasswordCard />)
    }).not.toThrow()
  })
})
