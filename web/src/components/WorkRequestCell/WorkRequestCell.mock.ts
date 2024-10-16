import { FindWorkRequestQuery } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  workRequest: mockWorkRequest,
})

export const mockShifts: FindWorkRequestQuery['workRequest']['shifts'] = [
  {
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
  },
]

const mockWorkRequest: FindWorkRequestQuery['workRequest'] = {
  __typename: 'WorkRequest',
  id: 'mock_work_request_123',
  createdAt: '2022-01-01T12:00:00.000Z',
  projectName: 'Mock Project',
  startDate: '2022-01-15T09:00:00.000Z',
  endDate: '2022-01-15T17:00:00.000Z',
  status: 'CONFIRMED',
  numWorkers: 3,
  location: {
    __typename: 'Address',
    id: 'mock_address_123',
    street: 'Mock Street',
    houseNumber: '123',
    city: 'Mock City',
    province: 'Mock Province',
    country: 'Mock Country',
    postalCode: 'M3K 1N1',
  },
  jobProfile: {
    __typename: 'JobProfile',
    id: 'mock_job_profile_123',
    name: 'Mock Job Profile',
    yearsOfExp: 5,
    hourlyWageMin: 20.0,
    hourlyWageMax: 30.0,
    maxTravelDistance: 10,
    isTravelReimbursed: true,
    isCarAvailable: false,
    kmAllowance: 0.2,
    totalBudgetPerHour: 30.0,
    comment: 'Mock comment',
  },
  createdBy: null,
  shifts: mockShifts,
  comments: [
    {
      __typename: 'Comment',
      id: 'mock_comment_123',
      body: 'Mock comment',
      createdAt: '2022-01-15T09:00:00.000Z',
      commentedBy: {
        __typename: 'User',
        id: 'mock_user_123',
        firstName: 'Mock First Name',
        lastName: 'Mock Last Name',
        avatarUrl: 'https://example.com/avatar.jpg',
      },
    },
  ],
}
