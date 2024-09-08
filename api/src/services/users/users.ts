import type {
  MutationResolvers,
  QueryResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  const isUpdatingSelf = id === context.currentUser.id

  if (!isUpdatingSelf) {
    throw new ForbiddenError(
      'U werkt informatie bij voor een ander account. U kunt alleen uw eigen accountinformatie bijwerken.'
    )
  }

  return db.user.update({
    data: input,
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  workRequest: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).workRequest()
  },
  address: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).address()
  },
  jobProfile: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).jobProfile()
  },
  // certificate: (_obj, { root }) => {
  //   return db.user.findUnique({ where: { id: root?.id } }).certificate()
  // },
}
