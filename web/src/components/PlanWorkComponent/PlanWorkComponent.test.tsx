import { render } from '@redwoodjs/testing/web'

import PlanWorkComponent from './PlanWorkComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlanWorkComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanWorkComponent />)
    }).not.toThrow()
  })
})
