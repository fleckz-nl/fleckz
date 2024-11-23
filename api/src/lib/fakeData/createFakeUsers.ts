import { fakerNL as faker } from '@faker-js/faker'
import { createId } from '@paralleldrive/cuid2'
import { Prisma } from '@prisma/client'
import { Role } from 'types/graphql'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'

type createFakeUsersProps = {
  n?: number
  roles?: Role[]
}
export function createFakeUsers(
  { n, roles }: createFakeUsersProps = { n: 5, roles: ['CLIENT'] }
) {
  return Array.from({ length: n }, () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email({ firstName, lastName })
    const password = faker.internet.password()
    const [hashedPassword, salt] = hashPassword(password)

    const user: Prisma.UserCreateManyInput = {
      id: createId(),
      email,
      firstName,
      lastName,
      hashedPassword,
      salt,
      roles,
    }

    return user
  })
}
