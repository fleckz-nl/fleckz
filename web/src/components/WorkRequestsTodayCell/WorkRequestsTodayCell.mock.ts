import { WorkRequestsTodayQuery } from 'types/graphql'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  workRequestsToday: mockWorkRequests,
})

const mockWorkRequests: WorkRequestsTodayQuery['workRequestsToday'] = [
  {
    __typename: 'WorkRequest',
    id: 'cm2dl2fxu0001fpx54uqzgzbk',
    projectName: 'Mock Project 1',
    startDate: '2024-10-18T18:00:00.000Z',
    endDate: '2024-10-18T19:30:00.000Z',
    jobProfile: {
      __typename: 'JobProfile',
      id: 'cm1tomi7j00007ki8pnwjnuvg',
      name: 'Mock Job Profile 1',
    },
    shifts: [
      {
        __typename: 'Shift',
        id: 'cm2dl2fxu0002fpx53qhzqy1q',
        createdAt: '2024-10-18T17:37:00.976Z',
        updatedAt: '2024-10-18T17:37:00.976Z',
        workerName: 'John Doe',
        checkedInAt: '2024-10-18T18:00:00.000Z',
        checkedOutAt: '2024-10-18T19:30:00.000Z',
        status: 'FULFILLED',
        tempAgency: { id: 'agency1', name: 'Agency 1' },
      },
      {
        __typename: 'Shift',
        id: 'cm2dl2fxu0003fpx53qhzqy1q',
        createdAt: '2024-10-18T17:37:00.976Z',
        updatedAt: '2024-10-18T17:37:00.976Z',
        workerName: 'Jane Doe',
        checkedInAt: '2024-10-18T18:00:00.000Z',
        checkedOutAt: '2024-10-18T19:30:00.000Z',
        status: 'FULFILLED',
        tempAgency: { id: 'agency2', name: 'Agency 2' },
      },
    ],
  },
  {
    __typename: 'WorkRequest',
    id: 'cm2dl826w0004fpx5e2zx1pbb',
    projectName: 'Mock Project 2',
    startDate: '2024-10-19T12:30:00.000Z',
    endDate: '2024-10-19T16:00:00.000Z',
    jobProfile: {
      __typename: 'JobProfile',
      id: 'cm0zden0n0001lhgq6rtffy04',
      name: 'Mock Job Profile 2',
    },
    shifts: [
      {
        __typename: 'Shift',
        id: 'cm2dl826w0005fpx56ooxjebn',
        createdAt: '2024-10-19T17:41:23.097Z',
        updatedAt: '2024-10-19T17:41:23.097Z',
        workerName: 'Bob Smith',
        checkedInAt: '2024-10-19T12:30:00.000Z',
        checkedOutAt: '2024-10-19T16:00:00.000Z',
        status: 'FULFILLED',
        tempAgency: { id: 'agency3', name: 'Agency 3' },
      },
      {
        __typename: 'Shift',
        id: 'cm2dl826w0006fpx56ooxjebn',
        createdAt: '2024-10-19T17:41:23.097Z',
        updatedAt: '2024-10-19T17:41:23.097Z',
        workerName: 'Alice Johnson',
        checkedInAt: '2024-10-19T12:30:00.000Z',
        checkedOutAt: '2024-10-19T16:00:00.000Z',
        status: 'FULFILLED',
        tempAgency: { id: 'agency4', name: 'Agency 4' },
      },
    ],
  },
  {
    __typename: 'WorkRequest',
    id: 'cm2dl826w0007fpx5e2zx1pbb',
    projectName: 'Mock Project 3',
    startDate: '2024-10-20T12:30:00.000Z',
    endDate: '2024-10-20T16:00:00.000Z',
    jobProfile: {
      __typename: 'JobProfile',
      id: 'cm1tomi7j00007ki8pnwjnuvg',
      name: 'Mock Job Profile 3',
    },
    shifts: [
      {
        __typename: 'Shift',
        id: 'cm2dl826w0008fpx56ooxjebn',
        createdAt: '2024-10-20T17:41:23.097Z',
        updatedAt: '2024-10-20T17:41:23.097Z',
        workerName: 'Mike Davis',
        checkedInAt: '2024-10-20T12:30:00.000Z',
        checkedOutAt: '2024-10-20T16:00:00.000Z',
        status: 'FULFILLED',
        tempAgency: { id: 'agency5', name: 'Agency 5' },
      },
    ],
  },
]
