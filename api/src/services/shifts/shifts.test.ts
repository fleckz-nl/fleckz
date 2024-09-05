import type { Shift } from '@prisma/client'

import { shifts, shift, createShift, updateShift, deleteShift } from './shifts'
import type { StandardScenario } from './shifts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shifts', () => {
  scenario('returns all shifts', async (scenario: StandardScenario) => {
    const result = await shifts()

    expect(result.length).toEqual(Object.keys(scenario.shift).length)
  })

  scenario('returns a single shift', async (scenario: StandardScenario) => {
    const result = await shift({ id: scenario.shift.one.id })

    expect(result).toEqual(scenario.shift.one)
  })

  scenario('creates a shift', async () => {
    const result = await createShift({
      input: { updatedAt: '2024-09-04T20:21:11.806Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-04T20:21:11.806Z'))
  })

  scenario('updates a shift', async (scenario: StandardScenario) => {
    const original = (await shift({ id: scenario.shift.one.id })) as Shift
    const result = await updateShift({
      id: original.id,
      input: { updatedAt: '2024-09-05T20:21:11.806Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-05T20:21:11.806Z'))
  })

  scenario('deletes a shift', async (scenario: StandardScenario) => {
    const original = (await deleteShift({ id: scenario.shift.one.id })) as Shift
    const result = await shift({ id: original.id })

    expect(result).toEqual(null)
  })
})
