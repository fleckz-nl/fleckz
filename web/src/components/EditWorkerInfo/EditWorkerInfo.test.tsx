import { render } from '@redwoodjs/testing/web'

import EditWorkerInfo from './EditWorkerInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditWorkerInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditWorkerInfo />)
    }).not.toThrow()
  })
})
