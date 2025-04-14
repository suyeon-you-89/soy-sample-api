-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "account";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "common";

-- CreateTable
CREATE TABLE "account"."code" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,
    "code_type" VARCHAR NOT NULL,
    "code" VARCHAR NOT NULL,
    "code_translation" VARCHAR NOT NULL,
    "code_nation" VARCHAR NOT NULL,
    "order" INTEGER,

    CONSTRAINT "code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account"."member" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR NOT NULL,
    "updated_by" VARCHAR,
    "deleted_by" VARCHAR,
    "id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account"."bank_account" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR NOT NULL,
    "updated_by" VARCHAR,
    "deleted_by" VARCHAR,
    "id" SERIAL NOT NULL,
    "owner_id" VARCHAR NOT NULL,
    "bank" VARCHAR NOT NULL,
    "account_number" INTEGER NOT NULL,
    "alias" VARCHAR,

    CONSTRAINT "bank_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account"."credit_card" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR NOT NULL,
    "updated_by" VARCHAR,
    "deleted_by" VARCHAR,
    "id" SERIAL NOT NULL,
    "owner_id" VARCHAR NOT NULL,
    "name" VARCHAR NOT NULL,
    "pay_bank_account_id" INTEGER NOT NULL,
    "memo" VARCHAR,

    CONSTRAINT "credit_card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account"."budget" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR NOT NULL,
    "updated_by" VARCHAR,
    "deleted_by" VARCHAR,
    "id" SERIAL NOT NULL,
    "type" VARCHAR NOT NULL,
    "category" VARCHAR NOT NULL,
    "out_type" VARCHAR,
    "owner_id" VARCHAR NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" VARCHAR NOT NULL DEFAULT 'KRW',
    "credit_card_id" INTEGER NOT NULL,
    "bank_account_id" INTEGER NOT NULL,
    "num_of_month" INTEGER NOT NULL,
    "start_month" VARCHAR NOT NULL,
    "end_month" VARCHAR NOT NULL,
    "memo" TEXT NOT NULL,

    CONSTRAINT "budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account"."income" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR NOT NULL,
    "updated_by" VARCHAR,
    "deleted_by" VARCHAR,
    "id" SERIAL NOT NULL,
    "owner_id" VARCHAR NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" VARCHAR NOT NULL DEFAULT 'KRW',

    CONSTRAINT "income_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account"."expense" (
    "created_dt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_dt" TIMESTAMP(6),
    "updated_dt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "created_by" VARCHAR NOT NULL,
    "updated_by" VARCHAR,
    "deleted_by" VARCHAR,
    "id" SERIAL NOT NULL,
    "owner_id" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,
    "memo" TEXT NOT NULL,

    CONSTRAINT "expense_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "code_code_type_code_code_nation_key" ON "account"."code"("code_type", "code", "code_nation");

-- CreateIndex
CREATE UNIQUE INDEX "member_id_key" ON "account"."member"("id");

-- CreateIndex
CREATE UNIQUE INDEX "bank_account_account_number_key" ON "account"."bank_account"("account_number");

-- CreateIndex
CREATE UNIQUE INDEX "credit_card_owner_id_name_key" ON "account"."credit_card"("owner_id", "name");
