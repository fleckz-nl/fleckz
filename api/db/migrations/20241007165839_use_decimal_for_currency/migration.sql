/*
  Warnings:

  - You are about to alter the column `hourlyWageMin` on the `JobProfile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `hourlyWageMax` on the `JobProfile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `kmAllowance` on the `JobProfile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `totalBudgetPerHour` on the `JobProfile` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "JobProfile" ALTER COLUMN "hourlyWageMin" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "hourlyWageMax" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "kmAllowance" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "totalBudgetPerHour" SET DATA TYPE DECIMAL(65,30);
