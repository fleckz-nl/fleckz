-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tempAgencyId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tempAgencyId_fkey" FOREIGN KEY ("tempAgencyId") REFERENCES "TempAgency"("id") ON DELETE SET NULL ON UPDATE CASCADE;
