import { MedicInterface } from './medic/interfaces';

export interface EmployeeInterface {
    codigoPessoa: string;
    dataContrato: Date;
    salario: number;
    senha: string;

    medicProfile?: MedicInterface;
}

export type CreateEmployeeInterface = Omit<EmployeeInterface, 'codigoPessoa'>;

export type UpdateEmployeeInterface = Partial<CreateEmployeeInterface>;

export type EmployeeKeys = keyof EmployeeInterface;
