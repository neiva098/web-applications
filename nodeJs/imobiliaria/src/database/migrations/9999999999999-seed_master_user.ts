import { createQueryBuilder, getRepository, MigrationInterface, QueryBuilder, QueryRunner } from "typeorm";
import { Person } from "../entities/Person";
import masterUser from '../seeds/users.seed'

export class seedMasterUser9999999999999 implements MigrationInterface {
    private createdUser: Person | undefined;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await masterUser['hashPassword']()

        const [sql, paramters] = createQueryBuilder(Person).insert().values(masterUser).getQueryAndParameters()

        this.createdUser = await queryRunner.query(sql, paramters)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getRepository(Person).delete({ id: this.createdUser?.id })
    }

}
