import type {
  QueryResolvers,
  MutationResolvers,
  JobProfileRelationResolvers,
} from 'types/graphql'

import { validate } from '@redwoodjs/api'
import { SyntaxError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const jobProfiles: QueryResolvers['jobProfiles'] = () => {
  return db.jobProfile.findMany({ orderBy: { createdAt: 'desc' } })
}

export const jobProfile: QueryResolvers['jobProfile'] = ({ id }) => {
  return db.jobProfile.findUnique({
    where: { id },
  })
}

export const createJobProfile: MutationResolvers['createJobProfile'] = ({
  input,
}) => {
  validate(input.yearsOfExp, 'yearsOfExp', {
    numericality: {
      greaterThanOrEqual: 0,
      lessThanOrEqual: 99,
    },
  })

  validate(input.hourlyWageMin, 'hourlyWageMin', {
    numericality: {
      greaterThanOrEqual: 0,
    },
  })
  validate(input.hourlyWageMax, 'hourlyWageMax', {
    numericality: {
      greaterThanOrEqual: 0,
    },
  })

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

export const deleteJobProfile: MutationResolvers['deleteJobProfile'] = async ({
  id,
}) => {
  const linkedWorkRequests = await db.workRequest.findMany({
    where: {
      jobProfileId: id,
    },
  })

  if (linkedWorkRequests.length > 0) {
    throw new SyntaxError(
      'Er zijn werkaanvragen gekoppeld aan dit functieprofiel. Je kunt alleen functieprofielen zonder werkaanvragen verwijderen.'
    )
  }

  return db.jobProfile.delete({
    where: { id },
  })
}

export const JobProfile: JobProfileRelationResolvers = {
  // certificates: (_obj, { root }) => {
  //   return db.jobProfile.findUnique({ where: { id: root?.id } }).certificates()
  // },
  // workRequest: (_obj, { root }) => {
  //   return db.jobProfile.findUnique({ where: { id: root?.id } }).workRequest()
  // },
}
