-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "account";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "common";

-- CreateTable
CREATE TABLE "account"."code" (
    "created_dt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMPTZ(6),
    "updated_dt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "code_type" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "code_translation" VARCHAR NOT NULL,
    "code_nation" VARCHAR NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "code_code_type_code_nation_key" ON "account"."code"("code_type", "code_nation");
