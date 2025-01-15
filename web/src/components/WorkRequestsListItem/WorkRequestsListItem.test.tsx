import { render } from '@redwoodjs/testing/web'

import WorkRequestsListItem from './WorkRequestsListItem'

describe('WorkRequestsListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkRequestsListItem />)
    }).not.toThrow()
  })
})
