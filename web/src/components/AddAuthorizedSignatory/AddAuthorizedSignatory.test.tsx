import { render } from '@redwoodjs/testing/web'

import AddAuthorizedSignatory from './AddAuthorizedSignatory'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddAuthorizedSignatory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddAuthorizedSignatory />)
    }).not.toThrow()
  })
})
