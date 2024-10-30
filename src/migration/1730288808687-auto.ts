import { MigrationInterface, QueryRunner } from "typeorm";

export class Auto1730288808687 implements MigrationInterface {
    name = 'Auto1730288808687'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "report_entity" ("id" SERIAL NOT NULL, "price" integer NOT NULL, "approved" boolean NOT NULL DEFAULT false, "make" character varying NOT NULL, "model" character varying NOT NULL, "year" integer NOT NULL, "lat" integer NOT NULL, "lng" integer NOT NULL, "mileage" integer NOT NULL, "userId" integer, CONSTRAINT "PK_7862cb0d03ad2677692143cf38e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "admin" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "report_entity" ADD CONSTRAINT "FK_8f2828e57b5484726488f72ad58" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report_entity" DROP CONSTRAINT "FK_8f2828e57b5484726488f72ad58"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "report_entity"`);
    }

}
