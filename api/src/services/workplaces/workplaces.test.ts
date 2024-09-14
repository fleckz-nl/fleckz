import type { Workplace } from '@prisma/client'

import {
  workplaces,
  workplace,
  createWorkplace,
  updateWorkplace,
  deleteWorkplace,
} from './workplaces'
import type { StandardScenario } from './workplaces.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('workplaces', () => {
  scenario('returns all workplaces', async (scenario: StandardScenario) => {
    const result = await workplaces()

    expect(result.length).toEqual(Object.keys(scenario.workplace).length)
  })

  scenario('returns a single workplace', async (scenario: StandardScenario) => {
    const result = await workplace({ id: scenario.workplace.one.id })

    expect(result).toEqual(scenario.workplace.one)
  })

  scenario('creates a workplace', async (scenario: StandardScenario) => {
    const result = await createWorkplace({
      input: {
        updatedAt: '2024-09-13T15:40:38.299Z',
        clientBusinessId: scenario.workplace.two.clientBusinessId,
        addressId: scenario.workplace.two.addressId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-13T15:40:38.299Z'))
    expect(result.clientBusinessId).toEqual(
      scenario.workplace.two.clientBusinessId
    )
    expect(result.addressId).toEqual(scenario.workplace.two.addressId)
  })

  scenario('updates a workplace', async (scenario: StandardScenario) => {
    const original = (await workplace({
      id: scenario.workplace.one.id,
    })) as Workplace
    const result = await updateWorkplace({
      id: original.id,
      input: { updatedAt: '2024-09-14T15:40:38.299Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-14T15:40:38.299Z'))
  })

  scenario('deletes a workplace', async (scenario: StandardScenario) => {
    const original = (await deleteWorkplace({
      id: scenario.workplace.one.id,
    })) as Workplace
    const result = await workplace({ id: original.id })

    expect(result).toEqual(null)
  })
})
