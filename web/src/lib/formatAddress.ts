import { Address } from 'types/graphql'

export function formatAddress(
  address: Omit<Address, 'createdAt' | 'updatedAt' | 'workRequest' | 'id'>
) {
  if (address == null) return
  const { street, houseNumber, houseNumberAddition, city, postalCode } = address
  return `${street} ${houseNumber}${
    houseNumberAddition ? houseNumberAddition : ''
  }, ${postalCode} ${city}`
}
