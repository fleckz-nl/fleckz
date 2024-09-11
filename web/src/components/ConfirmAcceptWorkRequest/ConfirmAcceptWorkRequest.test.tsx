import { render } from '@redwoodjs/testing/web'

import ConfirmAcceptWorkRequest from './ConfirmAcceptWorkRequest'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmAcceptWorkRequest', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmAcceptWorkRequest onConfirm={() => {}} />)
    }).not.toThrow()
  })
})
