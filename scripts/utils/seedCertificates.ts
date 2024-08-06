import type { Prisma, PrismaClient } from '@prisma/client'

export async function seedCertificates(db: PrismaClient) {
  const CERTIFICATES = [
    {
      name: 'Heftruck certificaat',
      uri: 'https://www.wikidata.org/wiki/Q95660745',
      description: '',
    },
    {
      name: 'VCA',
      description: 'De Veiligheid, gezondheid en milieu Checklist Aannemers',
      uri: 'https://www.vca.nl/diplomas-certificaten/vca',
    },
    {
      name: 'B-VCA',
      description: 'Basisveiligheid VCA',
      uri: 'https://www.vca.nl/diplomas-certificaten/b-vca',
    },
    {
      name: 'Basis hygiene',
      description: '',
    },
  ] as Prisma.CertificateCreateManyInput[]

  await db.certificate.createMany({
    data: CERTIFICATES,
  })
  console.log('✅ Seeded certificates')
}
