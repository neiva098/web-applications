import { createQueryBuilder, DeleteResult, getRepository } from 'typeorm';
import { Person } from '../../../database/entities/Person';
import {
    CreateUserInterface,
    PersonInterface,
    QueryUserInterface,
    UpdateUserInterface,
    UserReturnColumns,
} from '../interfaces';

export const create = async (
    personObject: CreateUserInterface,
    returning: '*' | UserReturnColumns[] = '*',
): Promise<PersonInterface> => {
    const personEntity = Object.assign(new Person(), personObject);

    const { raw } = await createQueryBuilder(Person)
        .insert()
        .values(personEntity)
        .returning(returning)
        .execute();

    return raw[0];
};

export const getOne = async (
    query: QueryUserInterface,
    returning?: UserReturnColumns[],
): Promise<Person | undefined> => {
    return getRepository(Person).findOne(query, {
        select: returning,
    });
};

export const update = async (
    id: string,
    updates: UpdateUserInterface,
    returning: '*' | UserReturnColumns[] = ['name', 'email', 'id'],
): Promise<Person | undefined> => {
    const updateRes = await createQueryBuilder()
        .update(Person, Object.assign(new Person(), updates))
        .where({ id })
        .returning(returning)
        .execute();

    return updateRes.raw;
};

export const deletePerson = async (id: string): Promise<DeleteResult> => {
    return getRepository(Person).delete({ id });
};
