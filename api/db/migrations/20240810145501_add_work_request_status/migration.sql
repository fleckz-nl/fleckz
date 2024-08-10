-- CreateEnum
CREATE TYPE "WorkRequestStatus" AS ENUM ('DRAFT', 'SUBMITTED', 'CONFIRMED', 'DONE');

-- AlterTable
ALTER TABLE "WorkRequest" ADD COLUMN     "status" "WorkRequestStatus" NOT NULL DEFAULT 'DRAFT';
