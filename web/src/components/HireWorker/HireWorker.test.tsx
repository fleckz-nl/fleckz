import { render } from '@redwoodjs/testing/web'

import HireWorker from './HireWorker'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HireWorker', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HireWorker />)
    }).not.toThrow()
  })
})
