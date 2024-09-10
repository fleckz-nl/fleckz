import { render } from '@redwoodjs/testing/web'

import SelectAgency from './SelectAgency'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SelectAgency', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SelectAgency />)
    }).not.toThrow()
  })
})
