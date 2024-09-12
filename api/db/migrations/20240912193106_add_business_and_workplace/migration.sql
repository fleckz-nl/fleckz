-- CreateTable
CREATE TABLE "ClientBusiness" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ClientBusiness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workplace" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientBusinessId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,

    CONSTRAINT "Workplace_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientBusiness" ADD CONSTRAINT "ClientBusiness_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workplace" ADD CONSTRAINT "Workplace_clientBusinessId_fkey" FOREIGN KEY ("clientBusinessId") REFERENCES "ClientBusiness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workplace" ADD CONSTRAINT "Workplace_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
