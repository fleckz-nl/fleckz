import type { Prisma, JobProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobProfileCreateArgs>({
  jobProfile: {
    one: {
      data: {
        updatedAt: '2024-08-07T13:45:31.666Z',
        name: 'String',
        qualityNeeded: 8277923,
        yearsOfExp: 6251329,
        hourlyWageMin: 513517.61840179533,
        hourlyWageMax: 3812053.088785139,
      },
    },
    two: {
      data: {
        updatedAt: '2024-08-07T13:45:31.666Z',
        name: 'String',
        qualityNeeded: 3596563,
        yearsOfExp: 8283454,
        hourlyWageMin: 1682487.2461807816,
        hourlyWageMax: 8748557.683181388,
      },
    },
  },
})

export type StandardScenario = ScenarioData<JobProfile, 'jobProfile'>
