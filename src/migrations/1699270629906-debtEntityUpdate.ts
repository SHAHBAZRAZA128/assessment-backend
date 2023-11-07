import { MigrationInterface, QueryRunner } from "typeorm";

export class DebtEntityUpdate1699270629906 implements MigrationInterface {
    name = 'DebtEntityUpdate1699270629906'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Debt" ADD "currency" character varying(10) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Debt" DROP COLUMN "currency"`);
    }

}
