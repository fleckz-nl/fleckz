import type { Prisma, Shift } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ShiftCreateArgs>({
  shift: {
    one: { data: { updatedAt: '2024-09-04T20:21:11.819Z' } },
    two: { data: { updatedAt: '2024-09-04T20:21:11.819Z' } },
  },
})

export type StandardScenario = ScenarioData<Shift, 'shift'>
