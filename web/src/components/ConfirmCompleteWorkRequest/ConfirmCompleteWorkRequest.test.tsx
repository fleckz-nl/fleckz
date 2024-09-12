import { render } from '@redwoodjs/testing/web'

import ConfirmCompleteWorkRequest from './ConfirmCompleteWorkRequest'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmCompleteWorkRequest', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmCompleteWorkRequest />)
    }).not.toThrow()
  })
})
