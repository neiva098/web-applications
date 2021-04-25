import { Medic } from '../../database/entities/Medic';
import { Patient } from '../../database/entities/Patient';

export interface AppointmentInterface {
    codigo: string;
    codigoPaciente: string;
    codigoMedico: string;
    paciente: Patient;
    medico: Medic;
    dataHora: Date;
}

export type CreateAppointmentInterface = Omit<
    AppointmentInterface,
    'codigo' | 'paciente' | 'medico'
>;

export type UpdateAppointmentInterface = Partial<CreateAppointmentInterface>;

export type AppointmentKeys = keyof AppointmentInterface;
