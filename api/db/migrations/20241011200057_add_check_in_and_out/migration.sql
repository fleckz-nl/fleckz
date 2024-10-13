-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ShiftStatus" ADD VALUE 'CHECKED_IN';
ALTER TYPE "ShiftStatus" ADD VALUE 'CHECKED_OUT';

-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "checkedInAt" TIMESTAMP(3),
ADD COLUMN     "checkedOutAt" TIMESTAMP(3);
