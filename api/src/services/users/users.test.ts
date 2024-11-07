import type { User } from '@prisma/client'

import { users, user, createUser, updateUser, deleteUser } from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })

  scenario('returns a single user', async (scenario: StandardScenario) => {
    const result = await user({ id: scenario.user.one.id })

    expect(result).toEqual(scenario.user.one)
  })

  scenario('creates a user', async () => {
    const result = await createUser({
      input: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'test@example.com',
        hashedPassword: 'String',
        salt: 'String',
        roles: ['CLIENT'],
      },
    })

    expect(result.firstName).toEqual('First Name')
    expect(result.lastName).toEqual('Last Name')
    expect(result.email).toEqual('test@example.com')
    expect(result.roles).toEqual(['CLIENT'])
  })

  scenario('updates a user', async (scenario: StandardScenario) => {
    mockCurrentUser(scenario.user.one)
    const result = await updateUser({
      id: scenario.user.one.id,
      input: { lastName: 'new last name' },
    })

    expect(result.lastName).toEqual('new last name')
  })

  scenario(
    'fails updating another user as non-admin',
    async (scenario: StandardScenario) => {
      mockCurrentUser(scenario.user.one)
      expect(() => {
        updateUser({
          id: scenario.user.two.id,
          input: { lastName: 'new last name' },
        })
      }).toThrow()
    }
  )

  scenario(
    'updates another user as an admin',
    async (scenario: StandardScenario) => {
      mockCurrentUser({ ...scenario.user.one, roles: ['ADMIN'] })
      expect(() => {
        updateUser({
          id: scenario.user.two.id,
          input: { lastName: 'new last name' },
        })
      }).not.toThrow()
    }
  )

  scenario('deletes a user', async (scenario: StandardScenario) => {
    const original = (await deleteUser({ id: scenario.user.one.id })) as User
    const result = await user({ id: original.id })

    expect(result).toEqual(null)
  })
})
