import { Prisma, PrismaClient } from 'prisma/prisma-client'
export async function seedAddresses(db: PrismaClient) {
  const fakeAddresses: Prisma.AddressCreateManyInput[] = [
    {
      id: 'ckshg1h1p00001u6e6fxp7lkh',
      street: 'Kalverstraat',
      houseNumber: '125',
      houseNumberAddition: null,
      postalCode: '1012PA',
      city: 'Amsterdam',
      province: 'Noord-Holland',
      country: 'Netherlands',
    },
    {
      id: 'ckshg1h1p00011u6e5t1tvnmv',
      street: 'Oude Gracht',
      houseNumber: '42',
      houseNumberAddition: 'B',
      postalCode: '3511AB',
      city: 'Utrecht',
      province: 'Utrecht',
      country: 'Netherlands',
    },
    {
      id: 'ckshg1h1p00021u6eyyhwvgsr',
      street: 'Coolsingel',
      houseNumber: '5',
      houseNumberAddition: null,
      postalCode: '3012AA',
      city: 'Rotterdam',
      province: 'Zuid-Holland',
      country: 'Netherlands',
    },
    {
      id: 'ckshg1h1p00031u6e57zxzqyt',
      street: 'Hofstraat',
      houseNumber: '67',
      houseNumberAddition: 'C',
      postalCode: '6811MA',
      city: 'Arnhem',
      province: 'Gelderland',
      country: 'Netherlands',
    },
    {
      id: 'ckshg1h1p00041u6e7ylgnhz4',
      street: 'Grote Markt',
      houseNumber: '89',
      houseNumberAddition: 'D',
      postalCode: '9712JB',
      city: 'Groningen',
      province: 'Groningen',
      country: 'Netherlands',
    },
  ]

  const results = await db.address.createMany({
    data: fakeAddresses,
    skipDuplicates: true,
  })

  console.log(`✅ Created ${results.count} fake addresses`)
}
