import { render } from '@redwoodjs/testing/web'

import WorkRequestsList from './WorkRequestsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

type WorkRequestStatus = 'CONFIRMED' | 'SUBMITTED' | 'DONE'

describe('WorkRequestsList', () => {
  it('renders successfully', () => {
    expect(() => {
      const mockWorkRequests: {
        id: string
        projectName: string
        startDate: string
        endDate: string
        status: WorkRequestStatus
        numWorkers: number
        location: {
          __typename: string
          street: string
          city: string
          state: string
          postalCode: string
        }
        jobProfile: { __typename: string; title: string }
        shifts: unknown[]
      }[] = [
        {
          id: '1',
          projectName: 'Project A',
          startDate: '2023-01-01',
          endDate: '2023-01-10',
          status: 'CONFIRMED',
          numWorkers: 5,
          location: {
            __typename: 'Address',
            street: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            postalCode: '12345',
          },
          jobProfile: { __typename: 'JobProfile', title: 'Engineer' },
          shifts: [],
        },
        {
          id: '2',
          projectName: 'Project B',
          startDate: '2023-02-01',
          endDate: '2023-02-10',
          status: 'SUBMITTED',
          numWorkers: 3,
          location: {
            __typename: 'Address',
            street: '456 Elm St',
            city: 'Othertown',
            state: 'TX',
            postalCode: '67890',
          },
          jobProfile: { __typename: 'JobProfile', title: 'Technician' },
          shifts: [],
        },
        {
          id: '3',
          projectName: 'Project C',
          startDate: '2023-03-01',
          endDate: '2023-03-10',
          status: 'DONE',
          numWorkers: 4,
          location: {
            __typename: 'Address',
            street: '789 Oak St',
            city: 'Sometown',
            state: 'NY',
            postalCode: '11223',
          },
          jobProfile: { __typename: 'JobProfile', title: 'Manager' },
          shifts: [],
        },
      ]
      render(<WorkRequestsList workRequests={mockWorkRequests} />)
    }).not.toThrow()
  })
})
