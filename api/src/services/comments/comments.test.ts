import type { Comment } from '@prisma/client'

import {
  comments,
  comment,
  createComment,
  updateComment,
  deleteComment,
} from './comments'
import type { StandardScenario } from './comments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('comments', () => {
  scenario('returns all comments', async (scenario: StandardScenario) => {
    const result = await comments()

    expect(result.length).toEqual(Object.keys(scenario.comment).length)
  })

  scenario('returns a single comment', async (scenario: StandardScenario) => {
    const result = await comment({ id: scenario.comment.one.id })

    expect(result).toEqual(scenario.comment.one)
  })

  scenario('creates a comment', async (scenario: StandardScenario) => {
    const result = await createComment({
      input: {
        updatedAt: '2024-09-14T16:58:17.039Z',
        body: 'String',
        userId: scenario.comment.two.userId,
        workRequestId: scenario.comment.two.workRequestId,
      },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-14T16:58:17.039Z'))
    expect(result.body).toEqual('String')
    expect(result.userId).toEqual(scenario.comment.two.userId)
    expect(result.workRequestId).toEqual(scenario.comment.two.workRequestId)
  })

  scenario('updates a comment', async (scenario: StandardScenario) => {
    const original = (await comment({ id: scenario.comment.one.id })) as Comment
    const result = await updateComment({
      id: original.id,
      input: { updatedAt: '2024-09-15T16:58:17.039Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2024-09-15T16:58:17.039Z'))
  })

  scenario('deletes a comment', async (scenario: StandardScenario) => {
    const original = (await deleteComment({
      id: scenario.comment.one.id,
    })) as Comment
    const result = await comment({ id: original.id })

    expect(result).toEqual(null)
  })
})
