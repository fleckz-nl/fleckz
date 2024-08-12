import type { WorkRequest } from '@prisma/client'

import {
  workRequests,
  workRequest,
  createWorkRequest,
  updateWorkRequest,
  deleteWorkRequest,
} from './workRequests'
import type { StandardScenario } from './workRequests.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('workRequests', () => {
  scenario('returns all workRequests', async (scenario: StandardScenario) => {
    const result = await workRequests()

    expect(result.length).toEqual(Object.keys(scenario.workRequest).length)
  })

  scenario(
    'returns a single workRequest',
    async (scenario: StandardScenario) => {
      const result = await workRequest({ id: scenario.workRequest.one.id })

      expect(result).toEqual(scenario.workRequest.one)
    }
  )

  scenario('creates a workRequest', async (scenario: StandardScenario) => {
    const result = await createWorkRequest({
      input: {
        updatedAt: '2024-08-11T09:56:58.021Z',
        projectName: 'String',
        jobProfileId: scenario.workRequest.two.jobProfileId,
        startDate: '2024-08-11T09:56:58.021Z',
        endDate: '2024-08-11T09:56:58.021Z',
        numWorkers: 7192132,
        addressId: scenario.workRequest.two.addressId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-08-11T09:56:58.021Z'))
    expect(result.projectName).toEqual('String')
    expect(result.jobProfileId).toEqual(scenario.workRequest.two.jobProfileId)
    expect(result.startDate).toEqual(new Date('2024-08-11T09:56:58.021Z'))
    expect(result.endDate).toEqual(new Date('2024-08-11T09:56:58.021Z'))
    expect(result.numWorkers).toEqual(7192132)
    expect(result.addressId).toEqual(scenario.workRequest.two.addressId)
  })

  scenario('updates a workRequest', async (scenario: StandardScenario) => {
    const original = (await workRequest({
      id: scenario.workRequest.one.id,
    })) as WorkRequest
    const result = await updateWorkRequest({
      id: original.id,
      input: { updatedAt: '2024-08-12T09:56:58.021Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-08-12T09:56:58.021Z'))
  })

  scenario('deletes a workRequest', async (scenario: StandardScenario) => {
    const original = (await deleteWorkRequest({
      id: scenario.workRequest.one.id,
    })) as WorkRequest
    const result = await workRequest({ id: original.id })

    expect(result).toEqual(null)
  })
})
