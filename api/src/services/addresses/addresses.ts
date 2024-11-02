import type {
  QueryResolvers,
  MutationResolvers,
  AddressRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const addresses: QueryResolvers['addresses'] = () => {
  const userRoles = context.currentUser.roles
  if (userRoles.includes('ADMIN') || userRoles.includes('MEDIATOR'))
    return db.address.findMany()

  return db.address.findMany({
    where: {
      workplace: {
        some: { clientBusiness: { createdBy: { id: context.currentUser.id } } },
      },
    },
  })
}

export const address: QueryResolvers['address'] = ({ id }) => {
  return db.address.findUnique({
    where: { id },
  })
}

export const createAddress: MutationResolvers['createAddress'] = ({
  input,
}) => {
  return db.address.create({
    data: { ...input, userId: context.currentUser.id },
  })
}

export const updateAddress: MutationResolvers['updateAddress'] = ({
  id,
  input,
}) => {
  return db.address.update({
    data: input,
    where: { id },
  })
}

export const deleteAddress: MutationResolvers['deleteAddress'] = ({ id }) => {
  return db.address.delete({
    where: { id },
  })
}

export const Address: AddressRelationResolvers = {
  workRequest: (_obj, { root }) => {
    return db.address.findUnique({ where: { id: root?.id } }).workRequest()
  },
}
