/*
  Warnings:

  - Added the required column `timeUnit` to the `OrderItems` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `measure` on the `OrderItems` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "OrderTimeUnit" AS ENUM ('DAY', 'HOUR');

-- AlterTable
ALTER TABLE "OrderItems" ADD COLUMN     "timeUnit" "OrderTimeUnit" NOT NULL,
DROP COLUMN "measure",
ADD COLUMN     "measure" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "OrderItemMeasure";
