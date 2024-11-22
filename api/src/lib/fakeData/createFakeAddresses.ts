import { fakerNL as faker } from '@faker-js/faker'
import { createId } from '@paralleldrive/cuid2'

export function createFakeAddresses(n: number = 5) {
  return Array.from(
    {
      length: n,
    },
    () => ({
      id: createId(),
      street: faker.location.street(),
      houseNumber: faker.location.buildingNumber(),
      houseNumberAddition: null,
      postalCode: faker.location.zipCode(),
      city: faker.location.city(),
      province: faker.location.state(),
      country: 'Nederlands',
    })
  )
}
