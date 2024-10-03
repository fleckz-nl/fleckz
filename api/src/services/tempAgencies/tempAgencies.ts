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
  const { address, ...rest } = input
  return db.tempAgency.create({
    data: {
      ...rest,
      address: {
        create: {
          ...address,
        },
      },
    },
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

export const updateTempAgencyAndAddress: MutationResolvers['updateTempAgencyAndAddress'] =
  ({ agencyId, agencyInput, addressId, addressInput }) => {
    return db.tempAgency.update({
      where: { id: agencyId },
      data: {
        ...agencyInput,
        address: {
          update: {
            where: { id: addressId },
            data: {
              ...addressInput,
            },
          },
        },
      },
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
