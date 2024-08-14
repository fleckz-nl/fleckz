import { addHours } from 'date-fns'
import { WorkSchedularQuery } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import BigCalendar from './BigCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BigCalendar', () => {
  it('renders successfully', () => {
    const CURRENT_DATE = new Date()

    const DEFAULT_EVENTS: WorkSchedularQuery['workRequests'] = [
      {
        id: 'id',
        startDate: CURRENT_DATE.toISOString(),
        endDate: addHours(CURRENT_DATE, 1).toISOString(),
        projectName: 'New project',
      },
    ]
    expect(() => {
      render(<BigCalendar defaultEvents={DEFAULT_EVENTS} />)
    }).not.toThrow()
  })
})
