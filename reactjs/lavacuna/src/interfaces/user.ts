import { AddressInterface } from "./address";
import { AppointmentInterface } from "./appointament";

export interface PatientInterface {
    codigoPessoa?: string;
    peso: number;
    altura: number;
    tipoSanguineo: string;
}

export interface EmployeeInterface {
    codigoPessoa?: string;
    dataContrato: string;
    salario: number;
    senha: string;
    medicProfile?: MedicInterface
}

export interface MedicInterface {
    codigoColaborador?: string;
    crm: string;
    especialidade: string;
    appointaments?: AppointmentInterface[];
}


export interface UserInterface {
    codigo?: string;
    nome: string;
    email: string;
    telefone: string;
    endereco?: AddressInterface;
    codigoEndereco?: string;
    patientProfile?: PatientInterface;
    employeeProfile?: EmployeeInterface;
}

export type CreateUserInterface = Omit<UserInterface, 'codigo' | 'codigoEndereco'>;

export type AuthResponse = {
    token: string
} & UserInterface