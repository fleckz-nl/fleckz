import type {
  QueryResolvers,
  MutationResolvers,
  ClientBusinessRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const clientBusinesses: QueryResolvers['clientBusinesses'] = () => {
  return db.clientBusiness.findMany()
}

export const clientBusiness: QueryResolvers['clientBusiness'] = ({ id }) => {
  return db.clientBusiness.findUnique({
    where: { id },
  })
}

export const createClientBusiness: MutationResolvers['createClientBusiness'] =
  ({ input }) => {
    return db.clientBusiness.create({
      data: input,
    })
  }

export const updateClientBusiness: MutationResolvers['updateClientBusiness'] =
  ({ id, input }) => {
    return db.clientBusiness.update({
      data: input,
      where: { id },
    })
  }

export const deleteClientBusiness: MutationResolvers['deleteClientBusiness'] =
  ({ id }) => {
    return db.clientBusiness.delete({
      where: { id },
    })
  }

export const ClientBusiness: ClientBusinessRelationResolvers = {
  workplaces: (_obj, { root }) => {
    return db.clientBusiness
      .findUnique({ where: { id: root?.id } })
      .workplaces()
  },
  createdBy: (_obj, { root }) => {
    return db.clientBusiness.findUnique({ where: { id: root?.id } }).createdBy()
  },
}
