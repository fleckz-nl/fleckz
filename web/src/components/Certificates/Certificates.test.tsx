import { render } from '@redwoodjs/testing/web'

import Certificates from './Certificates'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Certificates', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Certificates />)
    }).not.toThrow()
  })
})
