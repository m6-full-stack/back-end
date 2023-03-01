import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1677691007620 implements MigrationInterface {
    name = 'createTables1677691007620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "is_seller" TO "is_buyer"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "is_buyer" TO "is_seller"`);
    }

}
