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
        updatedAt: '2024-08-07T13:45:31.658Z',
        name: 'String',
        qualityNeeded: 4167938,
        yearsOfExp: 1403786,
        hourlyWageMin: 4618173.700980528,
        hourlyWageMax: 7533275.579213512,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-08-07T13:45:31.658Z'))
    expect(result.name).toEqual('String')
    expect(result.qualityNeeded).toEqual(4167938)
    expect(result.yearsOfExp).toEqual(1403786)
    expect(result.hourlyWageMin).toEqual(4618173.700980528)
    expect(result.hourlyWageMax).toEqual(7533275.579213512)
  })

  scenario('updates a jobProfile', async (scenario: StandardScenario) => {
    const original = (await jobProfile({
      id: scenario.jobProfile.one.id,
    })) as JobProfile
    const result = await updateJobProfile({
      id: original.id,
      input: { updatedAt: '2024-08-08T13:45:31.658Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-08-08T13:45:31.658Z'))
  })

  scenario('deletes a jobProfile', async (scenario: StandardScenario) => {
    const original = (await deleteJobProfile({
      id: scenario.jobProfile.one.id,
    })) as JobProfile
    const result = await jobProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
