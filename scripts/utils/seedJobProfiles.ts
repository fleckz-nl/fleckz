import { stdin as input, stdout as output } from 'node:process'
import readline from 'node:readline'

import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedJobProfiles(db: PrismaClient) {
  const fakeJobProfiles = [
    {
      name: 'Softwareontwikkelaar',
      hourlyWageMin: 35,
      hourlyWageMax: 50,
      yearsOfExp: 3,
      qualityNeeded: 4,
      maxTravelDistance: 30,
      kmAllowance: 0.21,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 52.1,
      comment:
        'Kennis van moderne programmeertalen zoals Python en Java is een vereiste.',
    },
    {
      name: 'Marketing Specialist',
      hourlyWageMin: 25,
      hourlyWageMax: 40,
      yearsOfExp: 2,
      qualityNeeded: 3,
      maxTravelDistance: 20,
      kmAllowance: 0.19,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 41.8,
      comment: 'Ervaring met digitale marketingtools en SEO/SEA is gewenst.',
    },
    {
      name: 'Salesmanager',
      hourlyWageMin: 30,
      hourlyWageMax: 55,
      yearsOfExp: 4,
      qualityNeeded: 4,
      maxTravelDistance: 50,
      kmAllowance: 0.25,
      isCarAvailable: true,
      isTravelReimbursed: true,
      totalBudgetPerHour: 55,
      comment:
        'Sterke onderhandelingsvaardigheden en ervaring in B2B-verkoop is een must.',
    },
    {
      name: 'HR Specialist',
      hourlyWageMin: 28,
      hourlyWageMax: 42,
      yearsOfExp: 3,
      qualityNeeded: 4,
      maxTravelDistance: 25,
      kmAllowance: 0.19,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 42,
      comment:
        'Kennis van arbeidsrecht en ervaring met werving en selectie is vereist.',
    },
    {
      name: 'Klantenservicemedewerker',
      hourlyWageMin: 18,
      hourlyWageMax: 28,
      yearsOfExp: 1,
      qualityNeeded: 2,
      maxTravelDistance: 15,
      kmAllowance: 0.15,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 28.15,
      comment:
        'Uitstekende communicatieve vaardigheden en klantgerichtheid zijn essentieel.',
    },
  ] as Prisma.JobProfileCreateManyInput[]

  const existingJobProfiles = await db.jobProfile.count()

  if (existingJobProfiles > 0) {
    const rl = readline.createInterface({ input, output })
    console.log(
      `There are ${existingJobProfiles} job profiles already in the database`
    )

    rl.question('Do you still want to add to the database? (y/n)', (answer) => {
      if (answer === 'n') return
    })
  }

  await db.jobProfile.createMany({
    data: fakeJobProfiles,
    skipDuplicates: true,
  })
}
