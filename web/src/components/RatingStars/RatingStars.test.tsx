import { render } from '@redwoodjs/testing/web'

import RatingStars from './RatingStars'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RatingStars', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RatingStars defaultValue={3} onChange={() => {}} />)
    }).not.toThrow()
  })
})
