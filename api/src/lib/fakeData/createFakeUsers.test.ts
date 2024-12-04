import { createFakeUsers } from 'src/lib/fakeData/createFakeUsers'

describe('createFakeUsers', () => {
  it('creates 5 users by default', () => {
    const users = createFakeUsers()
    expect(users).toHaveLength(5)
  })

  it('creates an arbitrary number of users by input', () => {
    const users = createFakeUsers({ n: 10 })
    expect(users).toHaveLength(10)
  })

  it('creates an array of users with expected data structure', () => {
    const users = createFakeUsers()

    users.forEach((user) => {
      expect(user).toHaveProperty('id')
      expect(user).toHaveProperty('email')
      expect(user).toHaveProperty('firstName')
      expect(user).toHaveProperty('email')
      expect(user).toHaveProperty('hashedPassword')
      expect(user).toHaveProperty('salt')
    })
  })

  it('creates users with client roles by default', () => {
    const users = createFakeUsers()
    expect(users).toHaveLength(5)
    users.forEach((user) => {
      expect(user).toHaveProperty('roles', ['CLIENT'])
    })
  })

  it('creates users with temp agency representative roles', () => {
    const tempAgencyReps = createFakeUsers({ roles: ['TEMP_AGENCY_REP'] })
    expect(tempAgencyReps).toHaveLength(5)
    tempAgencyReps.forEach((user) => {
      expect(user).toHaveProperty('roles', ['TEMP_AGENCY_REP'])
    })
  })

  it('creates users with admin roles', () => {
    const adminUsers = createFakeUsers({ roles: ['ADMIN'] })
    expect(adminUsers).toHaveLength(5)
    adminUsers.forEach((user) => {
      expect(user).toHaveProperty('roles', ['ADMIN'])
    })
  })
})
