import { render } from '@redwoodjs/testing/web'

import TempAgencyCard from './TempAgencyCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TempAgencyCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TempAgencyCard />)
    }).not.toThrow()
  })
})
