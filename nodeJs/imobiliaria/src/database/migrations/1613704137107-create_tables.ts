import {MigrationInterface, QueryRunner} from "typeorm";

export class createTables1613704137107 implements MigrationInterface {
    name = 'createTables1613704137107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visits" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "propertieId" uuid NOT NULL, "personId" uuid NOT NULL, "dataHora" TIMESTAMP NOT NULL, CONSTRAINT "PK_0e4bed54763c0f1fddda60698ba" PRIMARY KEY ("propertieId", "dataHora"))`);
        await queryRunner.query(`CREATE TABLE "persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_928155276ca8852f3c440cc2b2c" UNIQUE ("email"), CONSTRAINT "PK_74278d8812a049233ce41440ac7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "ownerId" uuid NOT NULL, "type" character varying NOT NULL, "roomsAmount" integer NOT NULL, "suitesAmount" integer NOT NULL DEFAULT '0', "livingRoomsAmount" integer NOT NULL, "diningRoomsAmount" integer NOT NULL, "parkingAmount" integer NOT NULL DEFAULT '0', "builtInCabinetsAmount" integer NOT NULL DEFAULT '0', "floor" integer, "condominiumValue" numeric, "rentValue" numeric NOT NULL, "fullConcierge" boolean, "description" character varying, CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "adresses" ("propertieId" uuid NOT NULL, "logradouro" character varying NOT NULL, "bairro" character varying NOT NULL, "numero" character varying NOT NULL, "cep" character varying NOT NULL, "uf" character varying NOT NULL, "complemento" character varying, CONSTRAINT "REL_05cbd951b0df6bdb7b2a9bcc21" UNIQUE ("propertieId"), CONSTRAINT "PK_05cbd951b0df6bdb7b2a9bcc21f" PRIMARY KEY ("propertieId"))`);
        await queryRunner.query(`ALTER TABLE "visits" ADD CONSTRAINT "FK_e27e68c6693b506b1e2f4d49fea" FOREIGN KEY ("propertieId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visits" ADD CONSTRAINT "FK_6db1f266a330439f5ace89f3d94" FOREIGN KEY ("personId") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_47b8bfd9c3165b8a53cd0c58df0" FOREIGN KEY ("ownerId") REFERENCES "persons"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "adresses" ADD CONSTRAINT "FK_05cbd951b0df6bdb7b2a9bcc21f" FOREIGN KEY ("propertieId") REFERENCES "properties"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adresses" DROP CONSTRAINT "FK_05cbd951b0df6bdb7b2a9bcc21f"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_47b8bfd9c3165b8a53cd0c58df0"`);
        await queryRunner.query(`ALTER TABLE "visits" DROP CONSTRAINT "FK_6db1f266a330439f5ace89f3d94"`);
        await queryRunner.query(`ALTER TABLE "visits" DROP CONSTRAINT "FK_e27e68c6693b506b1e2f4d49fea"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "persons"`);
        await queryRunner.query(`DROP TABLE "visits"`);
    }

}
