import { render } from '@redwoodjs/testing/web'

import ConfirmDeleteWork from './ConfirmDeleteWork'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConfirmDeleteWork', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmDeleteWork />)
    }).not.toThrow()
  })
})
