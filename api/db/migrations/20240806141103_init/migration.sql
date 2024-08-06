-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "roles" "Role"[] DEFAULT ARRAY['CLIENT']::"Role"[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobProfile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "qualityNeeded" INTEGER NOT NULL,
    "yearsOfExp" INTEGER NOT NULL,
    "hourlyWageMin" DOUBLE PRECISION NOT NULL,
    "hourlyWageMax" DOUBLE PRECISION NOT NULL,
    "maxTravelDistance" DOUBLE PRECISION,
    "isTravelReimbursed" BOOLEAN,
    "isCarAvailable" BOOLEAN,
    "kmAllowance" DOUBLE PRECISION,
    "totalBudgetPerHour" DOUBLE PRECISION,
    "comment" TEXT,

    CONSTRAINT "JobProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "issuingBody" TEXT,
    "uri" TEXT,
    "jobProfileId" TEXT,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_uri_key" ON "Certificate"("uri");

-- AddForeignKey
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_jobProfileId_fkey" FOREIGN KEY ("jobProfileId") REFERENCES "JobProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
