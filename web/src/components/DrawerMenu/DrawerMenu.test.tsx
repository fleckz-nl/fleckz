import { render } from '@redwoodjs/testing/web'

import DrawerMenu from './DrawerMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DrawerMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrawerMenu />)
    }).not.toThrow()
  })
})
