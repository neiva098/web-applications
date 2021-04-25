import { Person } from '../../../database/entities/Person';
import { HttpError } from '../../../utils/errors/HttpError';
import {
    PersonInterface,
    QueryUserInterface,
    UpdateUserInterface,
} from '../interfaces';

import * as repository from '../repository';
import { authenticate } from '../utils/auth';

export const auth = async (
    email: string,
    password: string,
): Promise<{ user?: Person; token?: string }> => {
    const user = await repository.getOne({ email });

    return authenticate(user!, password);
};

export const create = async (
    personBody: PersonInterface,
): Promise<PersonInterface> => {
    try {
        return await repository.create(personBody, ['email', 'name', 'id']);
    } catch {
        throw new HttpError(400, 'Já existe usuário com este email');
    }
};

export const getOne = async (
    query: QueryUserInterface,
): Promise<PersonInterface | undefined> => {
    const res = await repository.getOne(query, ['email', 'name']);

    if (!res) throw new HttpError(404, 'Person Not Found!');

    return res;
};

export const update = async (
    id: string,
    updates: UpdateUserInterface,
): Promise<PersonInterface | undefined> => {
    const res = await repository.update(id, updates, ['email', 'name', 'id']);

    if (!res) throw new HttpError(404, 'Person Not Found!');

    return res;
};

export const deletePerson = async (id: string): Promise<void> => {
    const deleteResult = await repository.deletePerson(id);

    if (deleteResult.affected !== 1) throw new HttpError(404, 'Not found');
};
