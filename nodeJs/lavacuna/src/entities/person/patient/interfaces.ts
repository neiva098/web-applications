import { Appointament } from '../../../database/entities/Appointment';

export interface PatientInterface {
    codigoPessoa: string;
    peso: number;
    altura: number;
    tipoSanguineo: string;

    appointaments?: Appointament[];
}

export type CreatePatientInterface = Omit<PatientInterface, 'codigoPessoa'>;

export type UpdatePatientInterface = Partial<CreatePatientInterface>;

export type PatientKeys = keyof PatientInterface;
