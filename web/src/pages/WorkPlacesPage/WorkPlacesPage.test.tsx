import { render } from '@redwoodjs/testing/web'

import WorkPlacesPage from './WorkPlacesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkPlacesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkPlacesPage />)
    }).not.toThrow()
  })
})
