-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "subcategories" ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true;
