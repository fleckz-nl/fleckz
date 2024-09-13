import type { ClientBusiness } from '@prisma/client'

import {
  clientBusinesses,
  clientBusiness,
  createClientBusiness,
  updateClientBusiness,
  deleteClientBusiness,
} from './clientBusinesses'
import type { StandardScenario } from './clientBusinesses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('clientBusinesses', () => {
  scenario(
    'returns all clientBusinesses',
    async (scenario: StandardScenario) => {
      const result = await clientBusinesses()

      expect(result.length).toEqual(Object.keys(scenario.clientBusiness).length)
    }
  )

  scenario(
    'returns a single clientBusiness',
    async (scenario: StandardScenario) => {
      const result = await clientBusiness({
        id: scenario.clientBusiness.one.id,
      })

      expect(result).toEqual(scenario.clientBusiness.one)
    }
  )

  scenario('creates a clientBusiness', async (scenario: StandardScenario) => {
    const result = await createClientBusiness({
      input: {
        name: 'String',
        updatedAt: '2024-09-13T15:40:01.089Z',
        userId: scenario.clientBusiness.two.userId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updatedAt).toEqual(new Date('2024-09-13T15:40:01.089Z'))
    expect(result.userId).toEqual(scenario.clientBusiness.two.userId)
  })

  scenario('updates a clientBusiness', async (scenario: StandardScenario) => {
    const original = (await clientBusiness({
      id: scenario.clientBusiness.one.id,
    })) as ClientBusiness
    const result = await updateClientBusiness({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a clientBusiness', async (scenario: StandardScenario) => {
    const original = (await deleteClientBusiness({
      id: scenario.clientBusiness.one.id,
    })) as ClientBusiness
    const result = await clientBusiness({ id: original.id })

    expect(result).toEqual(null)
  })
})
