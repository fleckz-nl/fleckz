import { render } from '@redwoodjs/testing/web'

import CvsList from './CvsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CvsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CvsList />)
    }).not.toThrow()
  })
})
