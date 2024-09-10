import { render } from '@redwoodjs/testing/web'

import WorkPlacesPage from './BusinessPage'
import BusinessPage from './BusinessPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorkPlacesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessPage />)
    }).not.toThrow()
  })
})
