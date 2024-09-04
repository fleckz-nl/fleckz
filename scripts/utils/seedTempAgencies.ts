import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedTempAgencies(db: PrismaClient) {
  const existingAddresses = await db.address.findMany({ select: { id: true } })
  const mockTempAgencies: Prisma.TempAgencyCreateManyInput[] = [
    {
      id: 'agency_1',
      createdAt: '2024-08-15T10:30:00.000Z',
      updatedAt: '2024-09-01T12:00:00.000Z',
      name: 'FlexiWerk Oplossingen',
      phone: '+31-20-123-4567',
      email: 'contact@flexiwerk.nl',
      addressId: existingAddresses[0].id,
    },
    {
      id: 'agency_2',
      createdAt: '2023-10-21T09:45:00.000Z',
      updatedAt: '2024-09-02T11:00:00.000Z',
      name: 'SnelAanHetWerk',
      phone: '+31-70-987-6543',
      email: 'info@snelaanhetwerk.nl',
      addressId: existingAddresses[1].id,
    },
    {
      id: 'agency_3',
      createdAt: '2024-05-10T14:15:00.000Z',
      updatedAt: '2024-09-03T08:30:00.000Z',
      name: 'TempoWerkers',
      phone: '+31-10-321-7654',
      email: 'info@tempowerkers.nl',
      addressId: existingAddresses[3].id,
    },
  ]

  const results = await db.tempAgency.createMany({
    data: mockTempAgencies,
    skipDuplicates: true,
  })
  console.log(`✅ Created ${results.count} temp agencies`)
}
