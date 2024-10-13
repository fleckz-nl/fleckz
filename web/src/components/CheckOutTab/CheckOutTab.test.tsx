import { FindWorkRequestQuery } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import CheckOutTab from './CheckOutTab'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckOutTab', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckOutTab shift={mockShift} />)
    }).not.toThrow()
  })
})

const mockShift: FindWorkRequestQuery['workRequest']['shifts'][0] = {
  __typename: 'Shift',
  id: 'mock_shift_4_1',
  name: 'Ploegendienst 1',
  status: 'FULFILLED',
  rating: null,
  workerName: null,
  checkedInAt: null,
  checkedOutAt: null,
  tempAgency: {
    __typename: 'TempAgency',
    id: 'agency_2',
    name: 'SnelAanHetWerk',
    email: 'info@snelaanhetwerk.nl',
    phone: '+31 12 345 6789',
    address: {
      __typename: 'Address',
      street: 'Oude Gracht',
      houseNumber: '42',
      houseNumberAddition: 'B',
      postalCode: '3511AB',
      city: 'Utrecht',
    },
  },
}
