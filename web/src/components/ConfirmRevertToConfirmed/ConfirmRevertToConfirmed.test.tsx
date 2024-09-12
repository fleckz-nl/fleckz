import { render } from '@redwoodjs/testing/web'

import ConfirmRevertToConfirmed from './ConfirmRevertToConfirmed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmRevertToConfirmed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmRevertToConfirmed onConfirm={() => {}} />)
    }).not.toThrow()
  })
})
