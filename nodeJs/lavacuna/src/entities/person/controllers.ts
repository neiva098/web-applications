import { Person } from '../../database/entities/Person';
import { HttpError } from '../../utils/errors/HttpError';
import { AuthInterface, CreatePersonInterface } from './interfaces';
import * as repository from './repository';
import { authenticate } from './utils/auth';

export const create = async (personBody: CreatePersonInterface): Promise<Person> => {
    try {
        return await repository.create(personBody);
    } catch {
        throw new HttpError(400, 'Já existe usuário com este e-mail');
    }
};

export const auth = async (
    authBody: AuthInterface,
): Promise<{ token?: string } & Person> => {
    const user = await repository.getOne({ email: authBody.email });

    if (!user) throw new HttpError(404, 'User not found');

    return authenticate(user, authBody.password);
};

export const getEmployess = async (): Promise<Person[]> => {
    return repository.getEmployess();
};
