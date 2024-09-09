-- DropForeignKey
ALTER TABLE "Shift" DROP CONSTRAINT "Shift_workRequestId_fkey";

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_workRequestId_fkey" FOREIGN KEY ("workRequestId") REFERENCES "WorkRequest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
