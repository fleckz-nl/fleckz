import type { Address } from '@prisma/client'

import {
  addresses,
  address,
  createAddress,
  updateAddress,
  deleteAddress,
} from './addresses'
import type { StandardScenario } from './addresses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('addresses', () => {
  scenario('returns all addresses', async (scenario: StandardScenario) => {
    mockCurrentUser({
      id: 'test_user_1',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      avatarUrl: 'https://example.com',
      roles: ['ADMIN'],
    })
    const result = await addresses()

    expect(result.length).toEqual(Object.keys(scenario.address).length)
  })

  scenario('returns a single address', async (scenario: StandardScenario) => {
    const result = await address({ id: scenario.address.one.id })

    expect(result).toEqual(scenario.address.one)
  })

  scenario('creates a address', async () => {
    const result = await createAddress({
      input: {
        street: 'String',
        houseNumber: 'String',
        postalCode: 'String',
        city: 'String',
        province: 'String',
      },
    })

    console.log(result)

    expect(result.street).toEqual('String')
    expect(result.houseNumber).toEqual('String')
    expect(result.postalCode).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.province).toEqual('String')
  })

  scenario('updates a address', async (scenario: StandardScenario) => {
    const original = (await address({ id: scenario.address.one.id })) as Address
    const result = await updateAddress({
      id: original.id,
      input: { street: 'new street' },
    })

    expect(result.street).toEqual('new street')
  })

  scenario('deletes a address', async (scenario: StandardScenario) => {
    const original = (await deleteAddress({
      id: scenario.address.one.id,
    })) as Address
    const result = await address({ id: original.id })

    expect(result).toEqual(null)
  })
})
