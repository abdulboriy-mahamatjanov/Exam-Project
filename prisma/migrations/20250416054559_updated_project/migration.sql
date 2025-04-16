/*
  Warnings:

  - You are about to drop the column `star` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the `Masters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderWithProducts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tools` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Masters" DROP CONSTRAINT "Masters_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Masters" DROP CONSTRAINT "Masters_levelId_fkey";

-- DropForeignKey
ALTER TABLE "Masters" DROP CONSTRAINT "Masters_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderWithProducts" DROP CONSTRAINT "OrderWithProducts_levelId_fkey";

-- DropForeignKey
ALTER TABLE "OrderWithProducts" DROP CONSTRAINT "OrderWithProducts_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderWithProducts" DROP CONSTRAINT "OrderWithProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "OrderWithProducts" DROP CONSTRAINT "OrderWithProducts_toolId_fkey";

-- DropForeignKey
ALTER TABLE "Orders" DROP CONSTRAINT "Orders_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_levelId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_capacityId_fkey";

-- DropForeignKey
ALTER TABLE "Tools" DROP CONSTRAINT "Tools_sizeId_fkey";

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "star";

-- DropTable
DROP TABLE "Masters";

-- DropTable
DROP TABLE "OrderWithProducts";

-- DropTable
DROP TABLE "Orders";

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "Tools";

-- DropEnum
DROP TYPE "MeasureType";

-- DropEnum
DROP TYPE "OrderPaymentType";

-- DropEnum
DROP TYPE "ToolStatus";

-- CreateTable
CREATE TABLE "Stars" (
    "id" TEXT NOT NULL,
    "star" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stars_pkey" PRIMARY KEY ("id")
);
