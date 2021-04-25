import { Person } from '../../../database/entities/Person';
import * as repository from './repository';

export const getAppointammentPatients = async (medic: string): Promise<Person[]> => {
    return repository.getAppointammentPatients(medic);
};

export const getPatients = async (): Promise<Person[]> => {
    return repository.getPatients();
};
