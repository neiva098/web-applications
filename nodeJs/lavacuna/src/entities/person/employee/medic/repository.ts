import { getRepository } from 'typeorm';
import { Medic } from '../../../../database/entities/Medic';
import { Person } from '../../../../database/entities/Person';

export const getEspecialidades = async (): Promise<string[]> => {
    const selected: { especialidade: string }[] = await getRepository(Medic)
        .createQueryBuilder()
        .select(['DISTINCT especialidade'])
        .execute();

    return selected.map(object => object.especialidade);
};

export const getByEspecialidade = async (
    especialidade: string,
): Promise<Person[]> => {
    return getRepository(Person)
        .createQueryBuilder('person')
        .innerJoinAndSelect('person.employeeProfile', 'employees')
        .innerJoinAndSelect('employees.medicProfile', 'medics')
        .where(`medics.especialidade = '${especialidade}'`)
        .getMany();
};

export const getMedics = async (): Promise<Person[]> => {
    return getRepository(Person)
        .createQueryBuilder('person')
        .innerJoinAndSelect('person.employeeProfile', 'employees')
        .innerJoinAndSelect('employees.medicProfile', 'medics')
        .getMany();
};
