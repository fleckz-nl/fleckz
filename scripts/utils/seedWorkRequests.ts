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
      numWorkers: 2,
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
      numWorkers: 3,
      addressId: existingAddresses.at(-2).id,
      status: 'DRAFT',
    },
    {
      id: 'mock_work_request_3',
      createdAt: '2024-09-03T12:30:00Z',
      updatedAt: '2024-09-03T12:30:00Z',
      projectName: 'IT-ondersteuningsaanvraag voor softwareproblemen',
      jobProfileId: existingJobProfiles.at(2).id,
      startDate: '2024-09-20T08:30:00Z',
      endDate: '2024-09-20T12:15:00Z',
      numWorkers: 3,
      addressId: existingAddresses.at(-3).id,
      status: 'SUBMITTED',
    },
    {
      id: 'mock_work_request_4',
      createdAt: '2024-09-03T12:30:00Z',
      updatedAt: '2024-09-03T12:30:00Z',
      projectName: 'Verzoek voor schoonmaak- en onderhoudsdiensten',
      jobProfileId: existingJobProfiles.at(3).id,
      startDate: '2024-10-01T14:00:00Z',
      endDate: '2024-10-01T17:30:00Z',
      numWorkers: 3,
      addressId: existingAddresses.at(-3).id,
      status: 'CONFIRMED',
    },
    {
      id: 'mock_work_request_5',
      createdAt: '2024-09-03T12:30:00Z',
      updatedAt: '2024-09-03T12:30:00Z',
      projectName: 'Verzoek tot vervanging van verlichting',
      jobProfileId: existingJobProfiles.at(1).id,
      startDate: '2024-10-05T14:00:00Z',
      endDate: '2024-10-05T17:30:00Z',
      numWorkers: 3,
      addressId: existingAddresses.at(-4).id,
      status: 'DONE',
    },
  ]

  const results = await db.workRequest.createMany({
    data: mockRequests,
    skipDuplicates: true,
  })
  console.log(`✅ Created ${results.count} work requests`)
}
