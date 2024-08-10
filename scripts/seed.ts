// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { db } from 'api/src/lib/db'

// Manually apply seeds via the `yarn rw prisma db seed` command.
//
// Seeds automatically run the first time you run the `yarn rw prisma migrate dev`
// command and every time you run the `yarn rw prisma migrate reset` command.
//
// See https://redwoodjs.com/docs/database-seeds for more info

export default async () => {
  try {
    console.log(
      '🈳 No seeding data for production DB is configured yet. If you want to generate fake data for development, run yarn rw exec seedFakeData'
    )
  } catch (error) {
    console.error(error)
  }
}
