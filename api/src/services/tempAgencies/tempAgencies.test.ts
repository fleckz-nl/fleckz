import type { TempAgency } from '@prisma/client'

import {
  tempAgencies,
  tempAgency,
  createTempAgency,
  updateTempAgency,
  deleteTempAgency,
} from './tempAgencies'
import type { StandardScenario } from './tempAgencies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tempAgencies', () => {
  scenario('returns all tempAgencies', async (scenario: StandardScenario) => {
    const result = await tempAgencies()

    expect(result.length).toEqual(Object.keys(scenario.tempAgency).length)
  })

  scenario(
    'returns a single tempAgency',
    async (scenario: StandardScenario) => {
      const result = await tempAgency({ id: scenario.tempAgency.one.id })

      expect(result).toEqual(scenario.tempAgency.one)
    }
  )

  scenario('creates a tempAgency', async () => {
    const result = await createTempAgency({
      input: {
        updatedAt: '2024-09-04T20:24:45.275Z',
        name: 'String',
        phone: 'String',
        email: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-04T20:24:45.275Z'))
    expect(result.name).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.email).toEqual('String')
  })

  scenario('updates a tempAgency', async (scenario: StandardScenario) => {
    const original = (await tempAgency({
      id: scenario.tempAgency.one.id,
    })) as TempAgency
    const result = await updateTempAgency({
      id: original.id,
      input: { updatedAt: '2024-09-05T20:24:45.275Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-05T20:24:45.275Z'))
  })

  scenario('deletes a tempAgency', async (scenario: StandardScenario) => {
    const original = (await deleteTempAgency({
      id: scenario.tempAgency.one.id,
    })) as TempAgency
    const result = await tempAgency({ id: original.id })

    expect(result).toEqual(null)
  })
})
