import { render } from '@redwoodjs/testing/web'

import ConfirmRevertInProgress from './ConfirmRevertInProgress'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmRevertInProgress', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmRevertInProgress onConfirm={() => {}} />)
    }).not.toThrow()
  })
})
