/*
  Warnings:

  - Added the required column `userId` to the `DataAboutCompany` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DataAboutCompany" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Orders" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "DataAboutCompany" ADD CONSTRAINT "DataAboutCompany_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
