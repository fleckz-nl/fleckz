import type { Prisma, Workplace } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WorkplaceCreateArgs>({
  workplace: {
    one: {
      data: {
        updatedAt: '2024-09-13T15:40:38.405Z',
        clientBusiness: {
          create: {
            name: 'String',
            updatedAt: '2024-09-13T15:40:38.405Z',
            createdBy: {
              create: {
                updatedAt: '2024-09-13T15:40:38.405Z',
                email: 'String9479039',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        address: {
          create: {
            updatedAt: '2024-09-13T15:40:38.405Z',
            street: 'String',
            houseNumber: 'String',
            postalCode: 'String',
            city: 'String',
            province: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-13T15:40:38.405Z',
        clientBusiness: {
          create: {
            name: 'String',
            updatedAt: '2024-09-13T15:40:38.406Z',
            createdBy: {
              create: {
                updatedAt: '2024-09-13T15:40:38.406Z',
                email: 'String4251054',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        address: {
          create: {
            updatedAt: '2024-09-13T15:40:38.406Z',
            street: 'String',
            houseNumber: 'String',
            postalCode: 'String',
            city: 'String',
            province: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Workplace, 'workplace'>
