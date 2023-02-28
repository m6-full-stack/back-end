import { MigrationInterface, QueryRunner } from "typeorm";

export class generateTables1677612310523 implements MigrationInterface {
    name = 'generateTables1677612310523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "announcementId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_url" character varying NOT NULL, "announcementId" uuid, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "title" character varying NOT NULL, "year" character varying NOT NULL, "mileage" character varying NOT NULL, "price" character varying NOT NULL, "description" character varying NOT NULL, "vehicle_type" character varying NOT NULL, "cover_image" character varying NOT NULL, "is_sold" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL, "advertiserId" uuid, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "cpf" character varying NOT NULL, "birthdate" date, "description" character varying, "is_buyer" boolean DEFAULT false, "created_at" date NOT NULL, "updated_at" date NOT NULL, "addressId" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bid" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" character varying NOT NULL, "created_at" date NOT NULL, "userId" uuid, "announcementId" uuid, CONSTRAINT "REL_b0f254bd6d29d3da2b6a8af262" UNIQUE ("userId"), CONSTRAINT "REL_263e6159b0f17cad5fa895714b" UNIQUE ("announcementId"), CONSTRAINT "PK_ed405dda320051aca2dcb1a50bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" character varying NOT NULL, "created_at" character varying NOT NULL, "buyerId" uuid, "announcementId" uuid, CONSTRAINT "REL_ec4767e5beacbc7dfaa507d1fc" UNIQUE ("buyerId"), CONSTRAINT "REL_31851374c8630757f2a565dc4b" UNIQUE ("announcementId"), CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_68af9910d29a58bf047f82c4c7a" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_d0994b7f039420a59aeb0839133" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD CONSTRAINT "FK_9f010540ae18ae5d1db5dd0c47b" FOREIGN KEY ("advertiserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bid" ADD CONSTRAINT "FK_b0f254bd6d29d3da2b6a8af262b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bid" ADD CONSTRAINT "FK_263e6159b0f17cad5fa895714ba" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_ec4767e5beacbc7dfaa507d1fc6" FOREIGN KEY ("buyerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactions" ADD CONSTRAINT "FK_31851374c8630757f2a565dc4bb" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_31851374c8630757f2a565dc4bb"`);
        await queryRunner.query(`ALTER TABLE "transactions" DROP CONSTRAINT "FK_ec4767e5beacbc7dfaa507d1fc6"`);
        await queryRunner.query(`ALTER TABLE "bid" DROP CONSTRAINT "FK_263e6159b0f17cad5fa895714ba"`);
        await queryRunner.query(`ALTER TABLE "bid" DROP CONSTRAINT "FK_b0f254bd6d29d3da2b6a8af262b"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP CONSTRAINT "FK_9f010540ae18ae5d1db5dd0c47b"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_d0994b7f039420a59aeb0839133"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_68af9910d29a58bf047f82c4c7a"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TABLE "bid"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
