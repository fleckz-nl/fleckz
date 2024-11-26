// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'
import { createFakeAddresses } from 'api/src/lib/fakeData/createFakeAddresses'

import { seedCertificates } from './utils/seedCertificates'
import { seedJobProfiles } from './utils/seedJobProfiles'
import { seedShifts } from './utils/seedShifts'
import { seedTempAgencies } from './utils/seedTempAgencies'
import { seedWorkRequests } from './utils/seedWorkRequests'

export default async () => {
  try {
    seedCertificates(db)
    seedJobProfiles(db)

    // Mocking addresses
    const fakeAddresses = createFakeAddresses()
    const addressesResult = await db.address.createMany({
      data: fakeAddresses,
      skipDuplicates: true,
    })
    console.log(`✅ Created ${addressesResult.count} fake addresses`)

    seedTempAgencies(db)
    await seedWorkRequests(db)
    await seedShifts(db)
  } catch (error) {
    console.error(error)
  }
}
