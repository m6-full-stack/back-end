import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677705889017 implements MigrationInterface {
    name = 'createTables1677705889017'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "is_buyer" TO "is_seller"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "is_seller" TO "is_buyer"`);
    }

}
