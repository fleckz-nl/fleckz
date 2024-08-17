import { render } from '@redwoodjs/testing/web'

import RequestStatusCard from './RequestStatusCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RequestStatusCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RequestStatusCard />)
    }).not.toThrow()
  })
})
