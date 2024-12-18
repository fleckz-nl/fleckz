import { render } from '@redwoodjs/testing/web'

import ContactPerson from './ContactPerson'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactPerson', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactPerson />)
    }).not.toThrow()
  })
})
