import { fakerNL as faker } from '@faker-js/faker'
import { createId } from '@paralleldrive/cuid2'
import { Prisma } from '@prisma/client'

export function createFakeJobProfiles(
  n: number = 5
): Prisma.JobProfileCreateManyInput[] {
  return Array.from(
    {
      length: n,
    },
    () => createIndividualFakeJobProfile()
  )
}

export function createIndividualFakeJobProfile(): Prisma.JobProfileCreateManyInput {
  const hourlyWageMin = faker.number.int({ min: 15, max: 30 })
  const hourlyWageMax = faker.number.int({
    min: hourlyWageMin,
    max: hourlyWageMin + 10,
  })
  return {
    id: createId(),
    name: faker.person.jobTitle(),
    hourlyWageMin,
    hourlyWageMax,
    yearsOfExp: faker.number.int({ min: 0, max: 10 }),
    maxTravelDistance: faker.number.int({ min: 2, max: 18 }),
    kmAllowance: 0.22,
    isCarAvailable: faker.datatype.boolean({ probability: 0.3 }),
    isTravelReimbursed: faker.datatype.boolean({
      probability: 0.5,
    }),
    totalBudgetPerHour: faker.number.float({
      min: hourlyWageMin,
      max: hourlyWageMin * 10,
    }),
    comment: faker.lorem.sentence(),
  }
}
