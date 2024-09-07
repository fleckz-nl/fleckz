import { render } from '@redwoodjs/testing/web'

import SideNav from './SideNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SideNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SideNav />)
    }).not.toThrow()
  })
})
