import { createFakeAddresses } from 'api/src/lib/fakeData/createFakeAddresses'
import { PrismaClient } from 'prisma/prisma-client'
export async function seedAddresses(db: PrismaClient) {
  const fakeAddresses = createFakeAddresses()

  const results = await db.address.createMany({
    data: fakeAddresses,
    skipDuplicates: true,
  })

  console.log(`✅ Created ${results.count} fake addresses`)
}
