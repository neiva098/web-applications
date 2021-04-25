import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { Person } from "../entities/Person";
import masterUser from '../seeds/users.seed'

export class seedMasterUser9999999999999 implements MigrationInterface {
    private createdUser: Person | undefined;

    public async up(queryRunner: QueryRunner): Promise<void> {
        this.createdUser = await getRepository(Person).save(masterUser)

        await queryRunner.startTransaction()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await getRepository(Person).delete({ codigo: this.createdUser?.codigo })
    }

}
