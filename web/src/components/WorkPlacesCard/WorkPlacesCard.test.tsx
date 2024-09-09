import { render } from '@redwoodjs/testing/web'

import WorkPlacesCard from './WorkPlacesCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WorkPlacesCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkPlacesCard />)
    }).not.toThrow()
  })
})
