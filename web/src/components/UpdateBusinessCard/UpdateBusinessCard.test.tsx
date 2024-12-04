import { ClientBusinessesQuery } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import UpdateBusinessCard from './UpdateBusinessCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UpdateBusinessCard', () => {
  it('renders the business name successfully', () => {
    const { getByText } = render(
      <UpdateBusinessCard clientBusiness={exampleClientBusiness} />
    )

    expect(getByText(exampleClientBusiness.name)).toBeInTheDocument()
  })
})

const exampleClientBusiness: ClientBusinessesQuery['clientBusinesses'][0] = {
  __typename: 'ClientBusiness',
  id: 'cm115nkhx0001xdwoqzdtwe8s',
  name: 'Bakkerij en Bistro',
  workplaces: [
    {
      __typename: 'Workplace',
      id: 'cm227ld390000mkkz5h2163y9',
      address: {
        __typename: 'Address',
        id: 'cm227ld390001mkkzjh1mgmsu',
        street: 'Bakkerstraat ',
        houseNumber: '22',
        houseNumberAddition: 'A',
        city: 'Amsterdam',
        postalCode: '5678 AB',
      },
    },
    {
      __typename: 'Workplace',
      id: 'cm227ld390000mkkz5h2163z9',
      address: {
        __typename: 'Address',
        id: 'cm227ld390001mkkzjh1mgmsv',
        street: 'Bistrostraat ',
        houseNumber: '33',
        houseNumberAddition: '',
        city: 'Utrecht',
        postalCode: '9012 CD',
      },
    },
  ],
}
