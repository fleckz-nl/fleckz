import { render } from '@redwoodjs/testing/web'

import Aside from './Aside'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Aside', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Aside />)
    }).not.toThrow()
  })
})
