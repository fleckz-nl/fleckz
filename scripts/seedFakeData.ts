// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'

import { seedAddresses } from './utils/seedAddresses'
import { seedCertificates } from './utils/seedCertificates'
import { seedJobProfiles } from './utils/seedJobProfiles'
import { seedTempAgencies } from './utils/seedTempAgencies'

export default async () => {
  try {
    seedCertificates(db)
    seedJobProfiles(db)
    seedAddresses(db)
    seedTempAgencies(db)
  } catch (error) {
    console.error(error)
  }
}
