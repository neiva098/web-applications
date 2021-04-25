import { Person } from '../../../../database/entities/Person';
import * as repository from './repository';

export const getEspecialidades = async (): Promise<string[]> => {
    return repository.getEspecialidades();
};

export const getByEspecialidade = async (
    especialidade: string,
): Promise<Person[]> => {
    return repository.getByEspecialidade(especialidade);
};

export const getMedics = async (): Promise<Person[]> => {
    return repository.getMedics();
};
