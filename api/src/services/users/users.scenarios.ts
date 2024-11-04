import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        id: 'example1',
        firstName: 'Example First',
        lastName: 'Example Last',
        updatedAt: '2024-09-01T17:28:16.471Z',
        email: 'String4740238',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-01T17:28:16.471Z',
        email: 'String8294796',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
