import { createFakeAddresses } from './createFakeAddresses'

describe('seedAddresses', () => {
  it('creates 5 addresses by default', () => {
    const addresses = createFakeAddresses()
    expect(addresses).toHaveLength(5)
  })

  it('creates the n number of addresses', () => {
    const N = 10
    const addresses = createFakeAddresses(N)
    expect(addresses).toHaveLength(10)
  })

  it('creates addresses with keys expected for an address object', () => {
    const expectedAddress = {
      id: 'test',
      street: 'etst',
      houseNumber: 'test',
      houseNumberAddition: null,
      postalCode: 'test',
      city: 'test',
      province: 'test',
      country: 'Nederlands',
    }
    const addresses = createFakeAddresses()

    expect(Object.keys(addresses[0])).toEqual(Object.keys(expectedAddress))
  })
})
