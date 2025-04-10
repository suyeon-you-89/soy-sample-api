-- AlterTable
ALTER TABLE "account"."code" ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "order" DROP NOT NULL,
ADD CONSTRAINT "code_pkey" PRIMARY KEY ("id");
