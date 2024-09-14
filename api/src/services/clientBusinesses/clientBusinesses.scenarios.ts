import type { Prisma, ClientBusiness } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ClientBusinessCreateArgs>({
  clientBusiness: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2024-09-13T15:40:01.116Z',
        createdBy: {
          create: {
            updatedAt: '2024-09-13T15:40:01.116Z',
            email: 'String9039798',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2024-09-13T15:40:01.116Z',
        createdBy: {
          create: {
            updatedAt: '2024-09-13T15:40:01.116Z',
            email: 'String4365629',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ClientBusiness, 'clientBusiness'>
