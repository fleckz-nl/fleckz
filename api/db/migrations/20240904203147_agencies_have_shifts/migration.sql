-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "tempAgencyId" TEXT;

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_tempAgencyId_fkey" FOREIGN KEY ("tempAgencyId") REFERENCES "TempAgency"("id") ON DELETE SET NULL ON UPDATE CASCADE;
