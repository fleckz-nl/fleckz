// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'
import { createFakeAddresses } from 'api/src/lib/fakeData/createFakeAddresses'
import { createFakeUsers } from 'api/src/lib/fakeData/createFakeUsers'

import { seedCertificates } from './utils/seedCertificates'
import { seedJobProfiles } from './utils/seedJobProfiles'
import { seedShifts } from './utils/seedShifts'
import { seedTempAgencies } from './utils/seedTempAgencies'
import { seedWorkRequests } from './utils/seedWorkRequests'

export default async () => {
  try {
    // Mocking users
    const clientUsersResult = await db.user.createMany({
      data: createFakeUsers({ roles: ['CLIENT'] }),
      skipDuplicates: true,
    })
    console.log(`✅ Created ${clientUsersResult.count} fake client users`)

    const agencyRepsResult = await db.user.createMany({
      data: createFakeUsers({ roles: ['TEMP_AGENCY_REP'] }),
      skipDuplicates: true,
    })
    console.log(`✅ Created ${agencyRepsResult.count} fake temp agency users`)

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
