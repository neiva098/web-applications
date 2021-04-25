import { EmployeeInterface, MedicInterface, PatientInterface, UserInterface } from "./user";

export interface AppointmentInterface {
    codigo: string;
    codigoPaciente: string;
    codigoMedico: string;
    paciente: PatientInterface;
    medico: MedicInterface;
    dataHora: string;
}

export interface GetAppointmentInterface {
    codigo: string;
    codigoPaciente: string;
    codigoMedico: string;
    paciente: PatientInterface & {
        pessoa: UserInterface
    };
    medico: MedicInterface & {
        employee: EmployeeInterface & {
            pessoa: UserInterface
        }
    };
    dataHora: string;
}

export type CreateAppointmentInterface = Omit<
    AppointmentInterface,
    'codigo' | 'paciente' | 'medico'
>;

export type UpdateAppointmentInterface = Partial<CreateAppointmentInterface>;

export type AppointmentKeys = keyof AppointmentInterface;
