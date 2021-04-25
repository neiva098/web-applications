import { Address } from '../../database/entities/Address';
import { EmployeeInterface } from './employee/interfaces';
import { PatientInterface } from './patient/interfaces';

export interface PersonInterface {
    codigo: string;
    nome: string;
    email: string;
    telefone: string;
    endereco: Address;
    codigoEndereco: string;
    patientProfile?: PatientInterface;
    employeeProfile?: EmployeeInterface;
}

export type CreatePersonInterface = Omit<PersonInterface, 'codigo'>;

export type UpdatePersonInterface = Partial<CreatePersonInterface>;

export type PersonKeys = keyof PersonInterface;

export interface AuthInterface {
    email: string;
    password: string;
}
