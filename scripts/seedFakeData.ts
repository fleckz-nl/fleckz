// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'

import { seedAddresses } from './utils/seedAddresses'
import { seedCertificates } from './utils/seedCertificates'
import { seedJobProfiles } from './utils/seedJobProfiles'

export default async () => {
  try {
    seedCertificates(db)
    seedJobProfiles(db)
    seedAddresses(db)
  } catch (error) {
    console.error(error)
  }
}
