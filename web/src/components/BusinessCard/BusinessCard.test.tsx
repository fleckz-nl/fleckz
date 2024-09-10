import { render } from '@redwoodjs/testing/web'

import WorkPlacesCard from './BusinessCard'
import BusinessCard from './BusinessCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BusinessCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BusinessCard />)
    }).not.toThrow()
  })
})
