-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('SOFT', 'HARD');

-- AlterTable
ALTER TABLE "Bonus" ADD COLUMN     "workerId" TEXT;

-- AlterTable
ALTER TABLE "Shift" ADD COLUMN     "workerId" TEXT;

-- CreateTable
CREATE TABLE "Worker" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "tempAgencyId" TEXT NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" "SkillType" NOT NULL,
    "workerId" TEXT,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillToWorker" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SkillToWorker_AB_unique" ON "_SkillToWorker"("A", "B");

-- CreateIndex
CREATE INDEX "_SkillToWorker_B_index" ON "_SkillToWorker"("B");

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bonus" ADD CONSTRAINT "Bonus_workerId_fkey" FOREIGN KEY ("workerId") REFERENCES "Worker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_tempAgencyId_fkey" FOREIGN KEY ("tempAgencyId") REFERENCES "TempAgency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWorker" ADD CONSTRAINT "_SkillToWorker_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToWorker" ADD CONSTRAINT "_SkillToWorker_B_fkey" FOREIGN KEY ("B") REFERENCES "Worker"("id") ON DELETE CASCADE ON UPDATE CASCADE;
