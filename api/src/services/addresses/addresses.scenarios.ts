import type { Prisma, Address } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AddressCreateArgs>({
  address: {
    one: {
      data: {
        id: 'cm2w9x22h0006skwnypy5mx36',
        createdAt: '2024-10-30T19:32:31.290Z',
        updatedAt: '2024-10-30T19:32:31.290Z',
        street: 'String',
        houseNumber: 'String',
        houseNumberAddition: null,
        postalCode: 'String',
        city: 'String',
        province: 'String',
        country: 'Netherlands',
        userId: null,
      },
    },
    two: {
      data: {
        id: 'cm2w9x22h0006skwnypy5mx38',
        createdAt: '2024-10-31T14:32:31.290Z',
        updatedAt: '2024-10-31T14:32:31.290Z',
        street: 'Prinsengracht',
        houseNumber: '456',
        houseNumberAddition: 'A',
        postalCode: '1015',
        city: 'Amsterdam',
        province: 'Noord-Holland',
        country: 'Netherlands',
        userId: null,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Address, 'address'>
