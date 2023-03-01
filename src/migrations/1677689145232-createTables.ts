import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677689145232 implements MigrationInterface {
    name = 'createTables1677689145232'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "is_buyer" TO "is_seller"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "is_seller" TO "is_buyer"`);
    }

}
