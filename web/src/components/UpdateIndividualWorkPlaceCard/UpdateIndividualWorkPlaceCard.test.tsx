import { render } from '@redwoodjs/testing/web'

import IndividualWorkPlaceCard from './UpdateIndividualWorkPlaceCard'
import UpdateIndividualWorkPlaceCard from './UpdateIndividualWorkPlaceCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IndividualWorkPlaceCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UpdateIndividualWorkPlaceCard />)
    }).not.toThrow()
  })
})
