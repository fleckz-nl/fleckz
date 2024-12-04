/*
  Warnings:

  - Added the required column `addressId` to the `ClientBusiness` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PENDING', 'PAID');

-- AlterTable
ALTER TABLE "ClientBusiness" ADD COLUMN     "addressId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "hourlyWageInEur" DECIMAL(65,30),
ADD COLUMN     "invoiceId" TEXT;

-- CreateTable
CREATE TABLE "Bonus" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "originalHourlyWage" DECIMAL(65,30) NOT NULL,
    "bonusRateInProp" DECIMAL(65,30) NOT NULL,
    "from" TIMESTAMP(3) NOT NULL,
    "to" TIMESTAMP(3) NOT NULL,
    "bonusHours" DECIMAL(65,30) NOT NULL,
    "bonusEur" DECIMAL(65,30) NOT NULL,
    "shiftId" TEXT NOT NULL,

    CONSTRAINT "Bonus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "invoicedAt" TIMESTAMP(3) NOT NULL,
    "dueAt" TIMESTAMP(3) NOT NULL,
    "taxRateInProp" DECIMAL(65,30) NOT NULL,
    "taxEur" DECIMAL(65,30) NOT NULL,
    "totalBeforeTaxInEur" DECIMAL(65,30) NOT NULL,
    "totalAfterTaxInEur" DECIMAL(65,30) NOT NULL,
    "status" "InvoiceStatus" NOT NULL,
    "clientBusinessId" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bonus" ADD CONSTRAINT "Bonus_shiftId_fkey" FOREIGN KEY ("shiftId") REFERENCES "Shift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientBusiness" ADD CONSTRAINT "ClientBusiness_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clientBusinessId_fkey" FOREIGN KEY ("clientBusinessId") REFERENCES "ClientBusiness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
