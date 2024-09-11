import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedJobProfiles(db: PrismaClient) {
  const fakeJobProfiles: Prisma.JobProfileCreateManyInput[] = [
    {
      id: 'clzo7lgno00013b6g6xlz8ghu',
      name: 'Softwareontwikkelaar',
      hourlyWageMin: 35,
      hourlyWageMax: 50,
      yearsOfExp: 3,
      maxTravelDistance: 30,
      kmAllowance: 0.21,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 52.1,
      comment:
        'Kennis van moderne programmeertalen zoals Python en Java is een vereiste.',
    },
    {
      id: 'ckldxzr7e000001jy5e5r3n1v',
      name: 'Salesmanager',
      hourlyWageMin: 30,
      hourlyWageMax: 55,
      yearsOfExp: 4,
      maxTravelDistance: 50,
      kmAllowance: 0.25,
      isCarAvailable: true,
      isTravelReimbursed: true,
      totalBudgetPerHour: 55,
      comment:
        'Sterke onderhandelingsvaardigheden en ervaring in B2B-verkoop is een must.',
    },
    {
      id: 'ckldxzr7e000101jycp9l76vv',
      name: 'HR Specialist',
      hourlyWageMin: 28,
      hourlyWageMax: 42,
      yearsOfExp: 3,
      maxTravelDistance: 25,
      kmAllowance: 0.19,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 42,
      comment:
        'Kennis van arbeidsrecht en ervaring met werving en selectie is vereist.',
    },
    {
      id: 'ckldxzr7e000201jytllvxa45',
      name: 'Klantenservicemedewerker',
      hourlyWageMin: 18,
      hourlyWageMax: 28,
      yearsOfExp: 1,
      maxTravelDistance: 15,
      kmAllowance: 0.15,
      isCarAvailable: false,
      isTravelReimbursed: true,
      totalBudgetPerHour: 28.15,
      comment:
        'Uitstekende communicatieve vaardigheden en klantgerichtheid zijn essentieel.',
    },
  ]

  const results = await db.jobProfile.createMany({
    data: fakeJobProfiles,
    skipDuplicates: true,
  })
  console.log(`✅ Created ${results.count} job profiles`)
}
