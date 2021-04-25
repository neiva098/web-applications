import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1617851424032 implements MigrationInterface {
    name = 'createTables1617851424032'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "patients" ("codigoPessoa" uuid NOT NULL, "peso" numeric NOT NULL, "altura" numeric NOT NULL, "tipoSanguineo" character varying(2) NOT NULL, CONSTRAINT "REL_29f49e7da231614b55b88c472d" UNIQUE ("codigoPessoa"), CONSTRAINT "PK_29f49e7da231614b55b88c472d3" PRIMARY KEY ("codigoPessoa"))`);
        await queryRunner.query(`CREATE TABLE "appointaments" ("codigo" uuid NOT NULL DEFAULT uuid_generate_v4(), "codigoMedico" uuid NOT NULL, "codigoPaciente" uuid NOT NULL, "dataHora" TIMESTAMP NOT NULL, CONSTRAINT "PK_ba7555bccc1b0e7bee4963d7c47" PRIMARY KEY ("codigo"))`);
        await queryRunner.query(`CREATE TABLE "medics" ("codigoColaborador" uuid NOT NULL, "crm" character varying NOT NULL, "especialidade" character varying NOT NULL, CONSTRAINT "REL_20aca8c1576b0464a0324f6611" UNIQUE ("codigoColaborador"), CONSTRAINT "PK_20aca8c1576b0464a0324f6611f" PRIMARY KEY ("codigoColaborador"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("codigoPessoa" uuid NOT NULL, "dataContrato" TIMESTAMP NOT NULL, "salario" numeric NOT NULL, "senha" character varying NOT NULL, CONSTRAINT "REL_e16d29c0251f8ea57ad0c58f98" UNIQUE ("codigoPessoa"), CONSTRAINT "PK_e16d29c0251f8ea57ad0c58f985" PRIMARY KEY ("codigoPessoa"))`);
        await queryRunner.query(`CREATE TABLE "people" ("codigo" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying(14) NOT NULL, "codigoEndereco" uuid NOT NULL, CONSTRAINT "UQ_c77e8752faa45901af2b245dff2" UNIQUE ("email"), CONSTRAINT "PK_9aef0246452d1c393d276fc4836" PRIMARY KEY ("codigo"))`);
        await queryRunner.query(`CREATE TABLE "adresses" ("codigo" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" character varying(8) NOT NULL, "logradouro" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, "numero" character varying, "complemento" character varying, CONSTRAINT "PK_412a18fcbff2ffd1229d48eb8d1" PRIMARY KEY ("codigo"))`);
        await queryRunner.query(`ALTER TABLE "patients" ADD CONSTRAINT "FK_29f49e7da231614b55b88c472d3" FOREIGN KEY ("codigoPessoa") REFERENCES "people"("codigo") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointaments" ADD CONSTRAINT "FK_eb32ad52a0560dc239b7567319a" FOREIGN KEY ("codigoMedico") REFERENCES "medics"("codigoColaborador") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointaments" ADD CONSTRAINT "FK_54d1d8bb61a5b18bd884eefaff8" FOREIGN KEY ("codigoPaciente") REFERENCES "patients"("codigoPessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medics" ADD CONSTRAINT "FK_20aca8c1576b0464a0324f6611f" FOREIGN KEY ("codigoColaborador") REFERENCES "employees"("codigoPessoa") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_e16d29c0251f8ea57ad0c58f985" FOREIGN KEY ("codigoPessoa") REFERENCES "people"("codigo") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "people" ADD CONSTRAINT "FK_954ae3113d6bd9a88d028548669" FOREIGN KEY ("codigoEndereco") REFERENCES "adresses"("codigo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.commitTransaction()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "people" DROP CONSTRAINT "FK_954ae3113d6bd9a88d028548669"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_e16d29c0251f8ea57ad0c58f985"`);
        await queryRunner.query(`ALTER TABLE "medics" DROP CONSTRAINT "FK_20aca8c1576b0464a0324f6611f"`);
        await queryRunner.query(`ALTER TABLE "appointaments" DROP CONSTRAINT "FK_54d1d8bb61a5b18bd884eefaff8"`);
        await queryRunner.query(`ALTER TABLE "appointaments" DROP CONSTRAINT "FK_eb32ad52a0560dc239b7567319a"`);
        await queryRunner.query(`ALTER TABLE "patients" DROP CONSTRAINT "FK_29f49e7da231614b55b88c472d3"`);
        await queryRunner.query(`DROP TABLE "adresses"`);
        await queryRunner.query(`DROP TABLE "people"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "medics"`);
        await queryRunner.query(`DROP TABLE "appointaments"`);
        await queryRunner.query(`DROP TABLE "patients"`);
    }

}
