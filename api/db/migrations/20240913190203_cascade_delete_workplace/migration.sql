-- DropForeignKey
ALTER TABLE "Workplace" DROP CONSTRAINT "Workplace_clientBusinessId_fkey";

-- AddForeignKey
ALTER TABLE "Workplace" ADD CONSTRAINT "Workplace_clientBusinessId_fkey" FOREIGN KEY ("clientBusinessId") REFERENCES "ClientBusiness"("id") ON DELETE CASCADE ON UPDATE CASCADE;
