import type {
  QueryResolvers,
  MutationResolvers,
  WorkplaceRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const workplaces: QueryResolvers['workplaces'] = () => {
  return db.workplace.findMany()
}

export const workplace: QueryResolvers['workplace'] = ({ id }) => {
  return db.workplace.findUnique({
    where: { id },
  })
}

export const createWorkplace: MutationResolvers['createWorkplace'] = ({
  input,
}) => {
  return db.workplace.create({
    data: input,
  })
}

export const createWorkplaceWithNewAddress: MutationResolvers['createWorkplaceWithNewAddress'] =
  ({ clientBusinessId, input }) => {
    const { address } = input
    return db.workplace.create({
      data: {
        address: {
          create: {
            ...address,
            userId: context.currentUser.id,
          },
        },
        clientBusiness: {
          connect: {
            id: clientBusinessId,
          },
        },
      },
    })
  }

export const updateWorkplace: MutationResolvers['updateWorkplace'] = ({
  id,
  input,
}) => {
  return db.workplace.update({
    data: input,
    where: { id },
  })
}

export const deleteWorkplace: MutationResolvers['deleteWorkplace'] = ({
  id,
}) => {
  return db.workplace.delete({
    where: { id },
  })
}

export const Workplace: WorkplaceRelationResolvers = {
  clientBusiness: (_obj, { root }) => {
    return db.workplace.findUnique({ where: { id: root?.id } }).clientBusiness()
  },
  address: (_obj, { root }) => {
    return db.workplace.findUnique({ where: { id: root?.id } }).address()
  },
}
