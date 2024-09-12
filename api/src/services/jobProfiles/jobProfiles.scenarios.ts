import type { Prisma, JobProfile } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.JobProfileCreateArgs>({
  jobProfile: {
    one: {
      data: {
        id: 'clzo7lgno00013b6g6xlz8ghu',
        name: 'Softwareontwikkelaar',
        hourlyWageMin: 35,
        hourlyWageMax: 50,
        yearsOfExp: 3,
        maxTravelDistance: 30,
        kmAllowance: 0.21,
        isCarAvailable: false,
        isTravelReimbursed: true,
        totalBudgetPerHour: 52.1,
        comment:
          'Kennis van moderne programmeertalen zoals Python en Java is een vereiste.',
      },
    },
    two: {
      data: {
        id: 'ckldxzr7e000001jy5e5r3n1v',
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
    },
  },
})

export type StandardScenario = ScenarioData<JobProfile, 'jobProfile'>
