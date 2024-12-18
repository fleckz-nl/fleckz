import { render } from '@redwoodjs/testing/web'

import ContactPersonForm from './ContactPersonForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactPersonForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactPersonForm />)
    }).not.toThrow()
  })
})
