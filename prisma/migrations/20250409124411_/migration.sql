/*
  Warnings:

  - Changed the type of `order` on the `code` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "account"."code" DROP COLUMN "order",
ADD COLUMN     "order" INTEGER NOT NULL;
