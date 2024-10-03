import { render } from '@redwoodjs/testing/web'

import ConfirmDeleteAgency from './ConfirmDeleteAgency'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmDeleteAgency', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmDeleteAgency onConfirm={() => {}} />)
    }).not.toThrow()
  })
})
