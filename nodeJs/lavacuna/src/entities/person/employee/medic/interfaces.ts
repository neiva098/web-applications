import { Appointament } from '../../../../database/entities/Appointment';

export interface MedicInterface {
    codigoColaborador: string;
    crm: string;
    especialidade: string;
    appointaments?: Appointament[];
}

export type CreateEmployeeInterface = Omit<MedicInterface, 'codigoColaborador'>;

export type UpdateEmployeeInterface = Partial<CreateEmployeeInterface>;

export type EmployeeKeys = keyof MedicInterface;
