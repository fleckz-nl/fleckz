import userEvent from '@testing-library/user-event'
import { FindWorkRequestQuery } from 'types/graphql'

import { render, waitFor } from '@redwoodjs/testing/web'

import AssignShiftWorkerDialog from './AssignShiftWorkerDialog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const shift: FindWorkRequestQuery['workRequest']['shifts'][0] = {
  __typename: 'Shift',
  id: 'mock_shift_123',
  status: 'FULFILLED',
  rating: 4,
  workerName: 'Mock Worker',
  checkedInAt: '2022-01-15T09:00:00.000Z',
  checkedOutAt: '2022-01-15T17:00:00.000Z',
  tempAgency: {
    __typename: 'TempAgency',
    id: 'mock_temp_agency_123',
    name: 'Mock Temp Agency',
    email: 'mock@example.com',
    phone: '1234567890',
    address: {
      __typename: 'Address',
      street: 'Mock Street',
      houseNumber: '123',
      city: 'Mock City',
      postalCode: 'M3K 1N1',
    },
  },
}

describe('AssignShiftWorkerDialog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssignShiftWorkerDialog shift={shift} />)
    }).not.toThrow()
  })

  it('open dialog when clicked - assigned shift', async () => {
    const { getByText } = render(<AssignShiftWorkerDialog shift={shift} />)

    const button = getByText('Mock Worker')
    await waitFor(() => userEvent.click(button))

    expect(getByText('Wijzig werknemer naam')).toBeInTheDocument()
  })

  it('opens dialog when clicked - unassigned shift', async () => {
    const shiftWithoutWorker = {
      ...shift,
      workerName: undefined,
    }
    const { getByText } = render(
      <AssignShiftWorkerDialog shift={shiftWithoutWorker} />
    )

    const button = getByText('Vul een dienst in')
    await waitFor(() => userEvent.click(button))

    expect(getByText('Vul de naam van de werknemer')).toBeInTheDocument()
  })
})
