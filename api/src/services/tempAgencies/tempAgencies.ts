import type {
  QueryResolvers,
  MutationResolvers,
  TempAgencyRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tempAgencies: QueryResolvers['tempAgencies'] = () => {
  return db.tempAgency.findMany()
}

export const tempAgency: QueryResolvers['tempAgency'] = ({ id }) => {
  return db.tempAgency.findUnique({
    where: { id },
  })
}

export const createTempAgency: MutationResolvers['createTempAgency'] = ({
  input,
}) => {
  return db.tempAgency.create({
    data: input,
  })
}

export const updateTempAgency: MutationResolvers['updateTempAgency'] = ({
  id,
  input,
}) => {
  return db.tempAgency.update({
    data: input,
    where: { id },
  })
}

export const deleteTempAgency: MutationResolvers['deleteTempAgency'] = ({
  id,
}) => {
  return db.tempAgency.delete({
    where: { id },
  })
}

export const TempAgency: TempAgencyRelationResolvers = {
  address: (_obj, { root }) => {
    return db.tempAgency.findUnique({ where: { id: root?.id } }).address()
  },
}