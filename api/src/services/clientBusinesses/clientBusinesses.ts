import type {
  QueryResolvers,
  MutationResolvers,
  ClientBusinessRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const clientBusinesses: QueryResolvers['clientBusinesses'] =
  async () => {
    return db.clientBusiness.findMany({
      where: { userId: context.currentUser.id },
      include: { workplaces: { include: { address: true } } },
      orderBy: {
        createdAt: 'asc',
      },
    })
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

export const createClientBusinessWithWorkplace: MutationResolvers['createClientBusinessWithWorkplace'] =
  async ({ input }) => {
    const { businessName, userId, ...workplace } = input

    return await db.clientBusiness.create({
      data: {
        name: businessName,
        userId,
        workplaces: {
          create: {
            address: {
              create: {
                ...workplace,
                userId: context.currentUser.id,
              },
            },
          },
        },
      },
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
