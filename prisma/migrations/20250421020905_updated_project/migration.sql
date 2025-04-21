/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Backet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Backet" DROP CONSTRAINT "Backet_ownerId_fkey";

-- AlterTable
ALTER TABLE "Backet" DROP COLUMN "ownerId";
