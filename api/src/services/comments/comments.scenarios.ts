import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        updatedAt: '2024-09-14T16:58:17.271Z',
        body: 'String',
        workRequest: {
          create: {
            updatedAt: '2024-09-14T16:58:17.271Z',
            projectName: 'String',
            startDate: '2024-09-14T16:58:17.271Z',
            endDate: '2024-09-14T16:58:17.271Z',
            numWorkers: 3215326,
            jobProfile: {
              create: {
                updatedAt: '2024-09-14T16:58:17.271Z',
                name: 'String',
                yearsOfExp: 4175249,
                hourlyWageMin: 8620839.386435235,
                hourlyWageMax: 7378973.181628825,
              },
            },
            location: {
              create: {
                updatedAt: '2024-09-14T16:58:17.273Z',
                street: 'String',
                houseNumber: 'String',
                postalCode: 'String',
                city: 'String',
              },
            },
          },
        },
        commentedBy: {
          create: {
            updatedAt: '2024-09-14T16:58:17.273Z',
            email: 'String7803909',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-09-14T16:58:17.273Z',
        body: 'String',
        workRequest: {
          create: {
            updatedAt: '2024-09-14T16:58:17.273Z',
            projectName: 'String',
            startDate: '2024-09-14T16:58:17.273Z',
            endDate: '2024-09-14T16:58:17.273Z',
            numWorkers: 339762,
            jobProfile: {
              create: {
                updatedAt: '2024-09-14T16:58:17.277Z',
                name: 'String',
                yearsOfExp: 4961133,
                hourlyWageMin: 5212723.0543018775,
                hourlyWageMax: 3154153.941385058,
              },
            },
            location: {
              create: {
                updatedAt: '2024-09-14T16:58:17.277Z',
                street: 'String',
                houseNumber: 'String',
                postalCode: 'String',
                city: 'String',
              },
            },
          },
        },
        commentedBy: {
          create: {
            updatedAt: '2024-09-14T16:58:17.277Z',
            email: 'String7632950',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
