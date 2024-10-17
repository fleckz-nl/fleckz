import { WorkRequestsTodayQuery } from 'types/graphql'

import { render, fireEvent } from '@redwoodjs/testing/web'

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

  it('renders the section', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText('Section title')).toBeInTheDocument()
  })

  it('renders the header with correct text', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText('HH:mm-HH:mm')).toBeInTheDocument()
    expect(getByText('Job Profile')).toBeInTheDocument()
  })

  it('renders the shifts table with correct data', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Temp Agency')).toBeInTheDocument()
  })

  it('renders the shift confirmation drawer', () => {
    const { getByText } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    expect(getByText('Shift confirmation drawer text')).toBeInTheDocument()
  })

  it('toggles the checkbox correctly', () => {
    const { getByRole } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('calls the onCheckedChange prop when the checkbox is clicked', () => {
    const onCheckedChange = jest.fn()
    const { getByRole } = render(
      <IndividualWorkRequestSection workRequest={workRequest} />
    )
    const checkbox = getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(onCheckedChange).toHaveBeenCalledTimes(1)
  })
})
