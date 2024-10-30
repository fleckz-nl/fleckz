import type {
  QueryResolvers,
  MutationResolvers,
  ShiftRelationResolvers,
} from 'types/graphql'

import { ForbiddenError } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const shifts: QueryResolvers['shifts'] = () => {
  return db.shift.findMany()
}

export const shift: QueryResolvers['shift'] = ({ id }) => {
  return db.shift.findUnique({
    where: { id },
  })
}

export const createShift: MutationResolvers['createShift'] = ({ input }) => {
  return db.shift.create({
    data: input,
  })
}

export const updateShift: MutationResolvers['updateShift'] = async ({
  id,
  input,
}) => {
  const { checkedInAt, checkedOutAt } = input
  if (checkedInAt > checkedOutAt)
    throw new ForbiddenError('De uitschrijvingsdatum is vóór de incheckdatum.')

  return db.shift.update({
    data: input,
    where: { id },
  })
}

export const deleteShift: MutationResolvers['deleteShift'] = ({ id }) => {
  return db.shift.delete({
    where: { id },
  })
}

export const unassignAgency: MutationResolvers['unassignAgency'] = ({ id }) => {
  return db.shift.update({
    where: { id },
    data: { tempAgency: { disconnect: true }, status: 'UNFULFILLED' },
  })
}

export const Shift: ShiftRelationResolvers = {
  workRequest: (_obj, { root }) => {
    return db.shift.findUnique({ where: { id: root?.id } }).workRequest()
  },
}
