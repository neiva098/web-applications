import { getRepository } from 'typeorm';
import { Employee } from '../../database/entities/Employee';
import { Person } from '../../database/entities/Person';
import { CreatePersonInterface, PersonKeys } from './interfaces';

export const create = async (person: CreatePersonInterface): Promise<Person> => {
    const personEntity = Object.assign(new Person(), {
        ...person,
        employeeProfile: person.employeeProfile
            ? Object.assign(new Employee(), person.employeeProfile)
            : undefined,
    });

    return getRepository(Person).save(personEntity);
};

export const getOne = async (
    query: {
        [K in PersonKeys]?: Person[K];
    },
): Promise<Person | undefined> => {
    return getRepository(Person).findOne(query);
};

export const getEmployess = async (): Promise<Person[]> => {
    return getRepository(Person)
        .createQueryBuilder('person')
        .innerJoinAndSelect('person.employeeProfile', 'employees')
        .leftJoinAndSelect('employees.medicProfile', 'medics')
        .getMany();
};
