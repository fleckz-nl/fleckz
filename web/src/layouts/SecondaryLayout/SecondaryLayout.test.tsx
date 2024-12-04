import { render } from '@redwoodjs/testing/web'

import SecondaryLayout from './SecondaryLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SecondaryLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondaryLayout />)
    }).not.toThrow()
  })
})
