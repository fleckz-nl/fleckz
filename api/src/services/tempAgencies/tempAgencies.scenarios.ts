import type { Prisma, TempAgency } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TempAgencyCreateArgs>({
  tempAgency: {
    one: {
      data: {
        updatedAt: '2024-09-04T20:24:45.288Z',
        name: 'String',
        phone: 'String',
        email: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-04T20:24:45.288Z',
        name: 'String',
        phone: 'String',
        email: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<TempAgency, 'tempAgency'>
