import { render } from '@redwoodjs/testing/web'

import AddWorkplaceDialog from './AddWorkplaceDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddWorkplaceDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddWorkplaceDialog />)
    }).not.toThrow()
  })
})
