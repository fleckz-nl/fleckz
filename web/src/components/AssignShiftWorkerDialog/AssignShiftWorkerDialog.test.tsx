import { render } from '@redwoodjs/testing/web'

import { mockShifts } from 'src/components/WorkRequestCell/WorkRequestCell.mock'

import AssignShiftWorkerDialog from './AssignShiftWorkerDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AssignShiftWorkerDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssignShiftWorkerDialog shift={mockShifts[0]} />)
    }).not.toThrow()
  })
})
