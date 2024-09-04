import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedShifts(db: PrismaClient) {
  const mockShifts: Prisma.ShiftCreateManyInput[] = [
    {
      id: 'ckl01p2ve00001ab123456',
      createdAt: '2023-08-12T08:00:00.000Z',
      updatedAt: '2023-09-01T10:00:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'ckoyr8d3v0001vujyh8rn3kz1',
      rating: null,
    },
    {
      id: 'ckl01p2ve00002ab123457',
      createdAt: '2023-08-14T09:00:00.000Z',
      updatedAt: '2023-09-02T11:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'ckoyr8d3v0001vujyh8rn3kz1',
      rating: null,
    },
    {
      id: 'ckl01p2ve00003ab123458',
      createdAt: '2023-08-16T10:00:00.000Z',
      updatedAt: '2023-09-03T12:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'ckoyr8d3v0002vujyh8rn3kz2',
      rating: null,
    },
    {
      id: 'ckl01p2ve00004ab123459',
      createdAt: '2023-08-18T11:00:00.000Z',
      updatedAt: '2023-09-04T13:00:00.000Z',
      status: 'FULFILLED',
      workRequestId: 'ckoyr8d3v0002vujyh8rn3kz2',
      rating: null,
    },
    {
      id: 'ckl01p2ve00005ab123450',
      createdAt: '2023-08-20T12:00:00.000Z',
      updatedAt: '2023-09-05T14:00:00.000Z',
      status: 'UNFULFILLED',
      workRequestId: 'ckoyr8d3v0002vujyh8rn3kz2',
      rating: null,
    },
  ]

  const results = await db.shift.createMany({
    data: mockShifts,
    skipDuplicates: true,
  })
  console.log(`✅ Created ${results.count} shifts`)
}
