import type { Prisma, WorkRequest } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WorkRequestCreateArgs>({
  workRequest: {
    one: {
      data: {
        updatedAt: '2024-08-11T09:56:58.036Z',
        projectName: 'String',
        startDate: '2024-08-11T09:56:58.036Z',
        endDate: '2024-08-11T09:56:58.036Z',
        numWorkers: 8753687,
        jobProfile: {
          create: {
            updatedAt: '2024-08-11T09:56:58.036Z',
            name: 'String',
            yearsOfExp: 8950941,
            hourlyWageMin: 2031144.9619626543,
            hourlyWageMax: 1293003.2687140037,
          },
        },
        location: {
          create: {
            updatedAt: '2024-08-11T09:56:58.036Z',
            street: 'String',
            houseNumber: 'String',
            postalCode: 'String',
            city: 'String',
            province: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-08-11T09:56:58.036Z',
        projectName: 'String',
        startDate: '2024-08-11T09:56:58.036Z',
        endDate: '2024-08-11T09:56:58.036Z',
        numWorkers: 8538942,
        jobProfile: {
          create: {
            updatedAt: '2024-08-11T09:56:58.036Z',
            name: 'String',
            yearsOfExp: 7435706,
            hourlyWageMin: 8521468.440744352,
            hourlyWageMax: 7395151.078624935,
          },
        },
        location: {
          create: {
            updatedAt: '2024-08-11T09:56:58.036Z',
            street: 'String',
            houseNumber: 'String',
            postalCode: 'String',
            city: 'String',
            province: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WorkRequest, 'workRequest'>
