import type {
  QueryResolvers,
  MutationResolvers,
  JobProfileRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const jobProfiles: QueryResolvers['jobProfiles'] = () => {
  return db.jobProfile.findMany()
}

export const jobProfile: QueryResolvers['jobProfile'] = ({ id }) => {
  return db.jobProfile.findUnique({
    where: { id },
  })
}

export const createJobProfile: MutationResolvers['createJobProfile'] = ({
  input,
}) => {
  return db.jobProfile.create({
    data: input,
  })
}

export const updateJobProfile: MutationResolvers['updateJobProfile'] = ({
  id,
  input,
}) => {
  return db.jobProfile.update({
    data: input,
    where: { id },
  })
}

export const deleteJobProfile: MutationResolvers['deleteJobProfile'] = ({
  id,
}) => {
  return db.jobProfile.delete({
    where: { id },
  })
}

export const JobProfile: JobProfileRelationResolvers = {
  certificates: (_obj, { root }) => {
    return db.jobProfile.findUnique({ where: { id: root?.id } }).certificates()
  },
  workRequest: (_obj, { root }) => {
    return db.jobProfile.findUnique({ where: { id: root?.id } }).workRequest()
  },
}
