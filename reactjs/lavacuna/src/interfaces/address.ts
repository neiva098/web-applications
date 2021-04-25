import { UserInterface } from "./user";

export interface AddressInterface {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;

    numero?: string;
    complemento?: string;
    moradores?: UserInterface[];
    codigo?: string;
}

export type CreateAddressInterface = AddressInterface;