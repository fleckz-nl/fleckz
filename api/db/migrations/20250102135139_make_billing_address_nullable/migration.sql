-- DropForeignKey
ALTER TABLE "ClientBusiness" DROP CONSTRAINT "ClientBusiness_addressId_fkey";

-- AlterTable
ALTER TABLE "ClientBusiness" ALTER COLUMN "addressId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ClientBusiness" ADD CONSTRAINT "ClientBusiness_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
