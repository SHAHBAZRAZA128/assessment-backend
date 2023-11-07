import { MigrationInterface, QueryRunner } from "typeorm";

export class DebtEntityUpdate1699271463401 implements MigrationInterface {
    name = 'DebtEntityUpdate1699271463401'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Debt" DROP COLUMN "initialAmount"`);
        await queryRunner.query(`ALTER TABLE "Debt" ADD "initialAmount" numeric(10,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Debt" DROP COLUMN "initialAmount"`);
        await queryRunner.query(`ALTER TABLE "Debt" ADD "initialAmount" double precision NOT NULL`);
    }

}
