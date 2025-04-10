/*
  Warnings:

  - A unique constraint covering the columns `[code_type,code,code_nation]` on the table `code` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `order` to the `code` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "account"."code_code_type_code_nation_key";

-- AlterTable
ALTER TABLE "account"."code" ADD COLUMN     "order" VARCHAR NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "code_code_type_code_code_nation_key" ON "account"."code"("code_type", "code", "code_nation");
