import type { QueryResolvers, UserRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
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
