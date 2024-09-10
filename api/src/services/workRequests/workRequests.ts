import type {
  QueryResolvers,
  MutationResolvers,
  WorkRequestRelationResolvers,
} from 'types/graphql'

import { validate } from '@redwoodjs/api'
import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const workRequests: QueryResolvers['workRequests'] = () => {
  return db.workRequest.findMany({
    include: {
      location: true,
      jobProfile: true,
      shifts: { include: { tempAgency: true } },
    },
  })
}

export const workRequest: QueryResolvers['workRequest'] = ({ id }) => {
  return db.workRequest.findUnique({
    where: { id },
    include: { shifts: { include: { tempAgency: true } } },
  })
}

export const createWorkRequest: MutationResolvers['createWorkRequest'] = ({
  input,
}) => {
  validate(input.startDate, 'startDate', {
    custom: {
      with: () => {
        if (input.startDate.valueOf() > input.endDate.valueOf()) {
          throw new Error('Start date is after the end date')
        }
      },
    },
  })

  return db.workRequest.create({
    data: {
      ...input,
      shifts: {
        createMany: {
          data: Array.from({ length: input.numWorkers }, (_, k) => ({
            name: `Ploegdienst ${k + 1}`,
          })),
        },
      },
    },
  })
}

export const updateWorkRequest: MutationResolvers['updateWorkRequest'] =
  async ({ id, input }) => {
    const existingWorkRequest = await db.workRequest.findUnique({
      where: {
        id,
      },
    })

    const numShiftsToAdd = input.numWorkers - existingWorkRequest.numWorkers
    const numShiftsToRemove = existingWorkRequest.numWorkers - input.numWorkers

    if (numShiftsToAdd >= 0) {
      return db.workRequest.update({
        data: {
          ...input,
          shifts: {
            createMany: {
              data: Array.from({ length: numShiftsToAdd }, (_, k) => ({
                name: `Ploegdienst ${k + 1}`,
              })),
            },
          },
        },
        where: { id },
      })
    }

    const unfulfilledShifts = await db.shift.findMany({
      where: {
        workRequestId: id,
        status: 'UNFULFILLED',
      },
    })
    const numFulfilledShifts = await db.shift.count({
      where: { workRequestId: id, status: 'FULFILLED' },
    })

    console.log('removing:', numShiftsToRemove)
    console.log('fulfilled:', numFulfilledShifts)

    if (numShiftsToRemove < numFulfilledShifts)
      throw new ForbiddenError(
        'Het aantal te verwijderen diensten is groter dan het aantal diensten met vervulde status.'
      )

    const shiftsIdToBeRemoved = unfulfilledShifts
      .toSorted((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf())
      .slice(0, numShiftsToRemove)
      .map((s) => s.id)

    await db.shift.deleteMany({ where: { id: { in: shiftsIdToBeRemoved } } })

    return await db.workRequest.update({
      data: input,
      where: { id },
    })
  }

export const deleteWorkRequest: MutationResolvers['deleteWorkRequest'] = ({
  id,
}) => {
  return db.workRequest.delete({
    where: { id },
  })
}

export const WorkRequest: WorkRequestRelationResolvers = {
  jobProfile: (_obj, { root }) => {
    return db.workRequest.findUnique({ where: { id: root?.id } }).jobProfile()
  },
  location: (_obj, { root }) => {
    return db.workRequest.findUnique({ where: { id: root?.id } }).location()
  },
}
