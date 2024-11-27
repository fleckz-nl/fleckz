import {
  createFakeJobProfiles,
  createIndividualFakeJobProfile,
} from './createFakeJobProfiles'

describe('createFakeJobProfiles', () => {
  it('should return an array of Prisma.JobProfileCreateManyInput objects with the specified number of profiles', () => {
    const n = 5
    const jobProfiles = createFakeJobProfiles(n)
    expect(jobProfiles).toHaveLength(n)
    jobProfiles.forEach((profile) => {
      expect(profile).toHaveProperty('id')
      expect(profile).toHaveProperty('name')
      expect(profile).toHaveProperty('hourlyWageMin')
      expect(profile).toHaveProperty('hourlyWageMax')
      expect(profile).toHaveProperty('yearsOfExp')
      expect(profile).toHaveProperty('maxTravelDistance')
      expect(profile).toHaveProperty('kmAllowance')
      expect(profile).toHaveProperty('isCarAvailable')
      expect(profile).toHaveProperty('isTravelReimbursed')
      expect(profile).toHaveProperty('totalBudgetPerHour')
      expect(profile).toHaveProperty('comment')
    })
  })

  it('should generate unique IDs for each profile', () => {
    const jobProfiles = createFakeJobProfiles(5)
    const ids = jobProfiles.map((profile) => profile.id)
    expect(ids).toStrictEqual(Array.from(new Set(ids)))
  })
})

describe('createIndividualFakeJobProfile', () => {
  it('should return a job profile object with the expected properties', () => {
    const profile = createIndividualFakeJobProfile()
    expect(profile).toHaveProperty('id')
    expect(profile).toHaveProperty('name')
    expect(profile).toHaveProperty('hourlyWageMin')
    expect(profile).toHaveProperty('hourlyWageMax')
    expect(profile).toHaveProperty('yearsOfExp')
    expect(profile).toHaveProperty('maxTravelDistance')
    expect(profile).toHaveProperty('kmAllowance')
    expect(profile).toHaveProperty('isCarAvailable')
    expect(profile).toHaveProperty('isTravelReimbursed')
    expect(profile).toHaveProperty('totalBudgetPerHour')
    expect(profile).toHaveProperty('comment')

    // Check the ranges for hourly wage, years of experience, and travel distance
    const hourlyWageMin = profile.hourlyWageMin as number
    const hourlyWageMax = profile.hourlyWageMax as number
    const yearsOfExp = profile.yearsOfExp
    const maxTravelDistance = profile.maxTravelDistance

    expect(hourlyWageMin).toBeGreaterThanOrEqual(15)
    expect(hourlyWageMax).toBeGreaterThanOrEqual(hourlyWageMin)
    expect(yearsOfExp).toBeGreaterThanOrEqual(0)
    expect(maxTravelDistance).toBeGreaterThanOrEqual(2)

    // Check the kmAllowance value
    expect(profile.kmAllowance).toBe(0.22)

    // Check the totalBudgetPerHour value
    const totalBudgetPerHour = profile.totalBudgetPerHour
    expect(totalBudgetPerHour).toBeGreaterThanOrEqual(hourlyWageMin)
  })
})
