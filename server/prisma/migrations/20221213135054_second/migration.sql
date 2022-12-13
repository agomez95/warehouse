/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `products` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "code" INTEGER NOT NULL,
ADD COLUMN     "cost" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "subcategories" ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "products_code_key" ON "products"("code");
