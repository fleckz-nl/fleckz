import { formatDate } from 'date-fns/format'
import { WorkRequestsTodayQuery } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import IndividualWorkRequestSection from './IndividualWorkRequestSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('IndividualWorkRequestSection', () => {
  const workRequest: WorkRequestsTodayQuery['workRequestsToday'][0] = {
    id: '123',
    projectName: 'project name',
    shifts: [
      {
        id: 'abc',
        workerName: 'John Doe',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'CHECKED_IN',
        tempAgency: { id: 'agency-id', name: 'Temp Agency' },
      },
    ],
    startDate: '2022-01-01T09:00:00.000Z',
    endDate: '2022-01-01T17:00:00.000Z',
    jobProfile: { id: 'job-id', name: 'Job Profile' },
  }

  it('renders project name', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText(workRequest.projectName)).toBeInTheDocument()
  })
  it('renders job profile name', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText(workRequest.jobProfile.name)).toBeInTheDocument()
  })

  it('renders the start and end times', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(
      getByText(formatDate(workRequest.startDate, 'HH:mm'))
    ).toBeInTheDocument()
    expect(
      getByText(formatDate(workRequest.endDate, 'HH:mm'))
    ).toBeInTheDocument()
  })

  it('renders the shifts table with correct data', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Temp Agency')).toBeInTheDocument()
  })
})
