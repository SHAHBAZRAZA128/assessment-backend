import { MigrationInterface, QueryRunner } from "typeorm";

export class EnititiesAdded1699264252358 implements MigrationInterface {
    name = 'EnititiesAdded1699264252358'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Debt" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "typeOfDebt" character varying(100) NOT NULL, "initialAmount" double precision NOT NULL, "startDate" date NOT NULL, "maturityDate" date NOT NULL, "interestRate" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af9c9a929412d4ce14a6efbb0eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."Member_accesslevel_enum" AS ENUM('Signatory', 'Manager', 'Viewer')`);
        await queryRunner.query(`CREATE TABLE "Member" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "accessLevel" "public"."Member_accesslevel_enum" NOT NULL DEFAULT 'Viewer', "isActive" boolean NOT NULL DEFAULT true, "joinedDate" TIMESTAMP DEFAULT now(), CONSTRAINT "UQ_9cc50bc474e863541dfe05cbbcd" UNIQUE ("email"), CONSTRAINT "PK_235428a1d87c5f639ef7b7cf170" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Member"`);
        await queryRunner.query(`DROP TYPE "public"."Member_accesslevel_enum"`);
        await queryRunner.query(`DROP TABLE "Debt"`);
    }

}
