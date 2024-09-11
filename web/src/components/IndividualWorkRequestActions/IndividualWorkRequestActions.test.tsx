import { render } from '@redwoodjs/testing/web'

import IndividualWorkRequestActions from './IndividualWorkRequestActions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IndividualWorkRequestActions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualWorkRequestActions />)
    }).not.toThrow()
  })
})
