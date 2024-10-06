import { render } from '@redwoodjs/testing/web'

import SortButton from './SortButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SortButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SortButton />)
    }).not.toThrow()
  })
})
