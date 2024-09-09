import { render } from '@redwoodjs/testing/web'

import IndividualWorkPlaceCard from './IndividualWorkPlaceCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IndividualWorkPlaceCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IndividualWorkPlaceCard />)
    }).not.toThrow()
  })
})
