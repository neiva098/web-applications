import { getRepository } from 'typeorm';
import { Person } from '../../../database/entities/Person';

export const getAppointammentPatients = async (medic: string): Promise<Person[]> => {
    return getRepository(Person)
        .createQueryBuilder('person')
        .innerJoinAndSelect('person.patientProfile', 'patients')
        .where(`codigo <> '${medic}'`)
        .getMany();
};

export const getPatients = async (): Promise<Person[]> => {
    return getRepository(Person)
        .createQueryBuilder('person')
        .innerJoinAndSelect('person.patientProfile', 'patients')
        .getMany();
};
