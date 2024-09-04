import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedWorkRequests(db: PrismaClient) {
  const existingAddresses = await db.address.findMany({ select: { id: true } })
  const existingJobProfiles = await db.jobProfile.findMany({
    select: { id: true },
  })
  const mockRequests: Prisma.WorkRequestCreateManyInput[] = [
    {
      id: 'ckoyr8d3v0001vujyh8rn3kz1',
      createdAt: '2024-09-04T08:00:00Z',
      updatedAt: '2024-09-04T08:00:00Z',
      projectName: 'Renovatie van kantoorgebouw',
      jobProfileId: existingJobProfiles.at(0).id,
      startDate: '2024-09-10T08:00:00Z',
      endDate: '2024-09-10T10:45:00Z',
      numWorkers: 5,
      addressId: existingAddresses.at(-1).id,
      status: 'DRAFT',
    },
    {
      id: 'ckoyr8d3v0002vujyh8rn3kz2',
      createdAt: '2024-09-03T12:30:00Z',
      updatedAt: '2024-09-03T12:30:00Z',
      projectName: 'Schilderen van de school',
      jobProfileId: existingJobProfiles.at(1).id,
      startDate: '2024-09-15T13:00:00Z',
      endDate: '2024-09-15T15:45:00Z',
      numWorkers: 8,
      addressId: existingAddresses.at(-2).id,
      status: 'DRAFT',
    },
  ]

  const results = await db.workRequest.createMany({
    data: mockRequests,
    skipDuplicates: true,
  })
  console.log(`✅ Created ${results.count} work requests`)
}
