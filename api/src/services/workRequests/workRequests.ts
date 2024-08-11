import type {
  QueryResolvers,
  MutationResolvers,
  WorkRequestRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const workRequests: QueryResolvers['workRequests'] = () => {
  return db.workRequest.findMany()
}

export const workRequest: QueryResolvers['workRequest'] = ({ id }) => {
  return db.workRequest.findUnique({
    where: { id },
  })
}

export const createWorkRequest: MutationResolvers['createWorkRequest'] = ({
  input,
}) => {
  return db.workRequest.create({
    data: input,
  })
}

export const updateWorkRequest: MutationResolvers['updateWorkRequest'] = ({
  id,
  input,
}) => {
  return db.workRequest.update({
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
