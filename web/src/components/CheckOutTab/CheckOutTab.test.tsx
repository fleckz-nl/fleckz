import { render } from '@redwoodjs/testing/web'

import { mockShifts } from 'src/components/WorkRequestCell/WorkRequestCell.mock'

import CheckOutTab from './CheckOutTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckOutTab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckOutTab shift={mockShifts[0]} />)
    }).not.toThrow()
  })
})
