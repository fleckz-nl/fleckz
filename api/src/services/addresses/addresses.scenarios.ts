import type { Prisma, Address } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AddressCreateArgs>({
  address: {
    one: {
      data: {
        updatedAt: '2024-08-11T09:58:03.479Z',
        street: 'String',
        houseNumber: 'String',
        postalCode: 'String',
        city: 'String',
        province: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2024-08-11T09:58:03.479Z',
        street: 'String',
        houseNumber: 'String',
        postalCode: 'String',
        city: 'String',
        province: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Address, 'address'>
