import type { JobProfile } from '@prisma/client'

import {
  jobProfiles,
  jobProfile,
  createJobProfile,
  updateJobProfile,
  deleteJobProfile,
} from './jobProfiles'
import type { StandardScenario } from './jobProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('jobProfiles', () => {
  scenario('returns all jobProfiles', async (scenario: StandardScenario) => {
    const result = await jobProfiles()

    expect(result.length).toEqual(Object.keys(scenario.jobProfile).length)
  })

  scenario(
    'returns a single jobProfile',
    async (scenario: StandardScenario) => {
      const result = await jobProfile({ id: scenario.jobProfile.one.id })

      expect(result).toEqual(scenario.jobProfile.one)
    }
  )

  scenario('creates a jobProfile', async () => {
    const result = await createJobProfile({
      input: {
        name: 'Salesmanager',
        hourlyWageMin: 30,
        hourlyWageMax: 55,
        yearsOfExp: 4,
        maxTravelDistance: 50,
        kmAllowance: 0.25,
        isCarAvailable: true,
        isTravelReimbursed: true,
        totalBudgetPerHour: 55,
        comment:
          'Sterke onderhandelingsvaardigheden en ervaring in B2B-verkoop is een must.',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-08-07T13:45:31.658Z'))
    expect(result.name).toEqual('String')
    expect(result.yearsOfExp).toEqual(4)
    expect(result.hourlyWageMin).toEqual(30)
    expect(result.hourlyWageMax).toEqual(55)
  })

  scenario('updates a jobProfile', async (scenario: StandardScenario) => {
    const newJobProfileName = 'New job profile name'
    const original = (await jobProfile({
      id: scenario.jobProfile.one.id,
    })) as JobProfile
    const result = await updateJobProfile({
      id: original.id,
      input: { name: newJobProfileName },
    })

    expect(result.updatedAt).toEqual(newJobProfileName)
  })

  scenario('deletes a jobProfile', async (scenario: StandardScenario) => {
    const original = (await deleteJobProfile({
      id: scenario.jobProfile.one.id,
    })) as JobProfile
    const result = await jobProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
