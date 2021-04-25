import { Person } from '../../database/entities/Person';

export interface AddressInterface {
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero?: string;
    complemento?: string;
    codigo?: string;
    moradores?: Person[];
}

export type CreateAddressInterface = Omit<AddressInterface, 'codigo' | 'moradores'>;

export type UpdateAddressInterface = Partial<CreateAddressInterface>;

export type AddressKeys = keyof AddressInterface;

export type FindByCep = Omit<
    AddressInterface,
    'codigo' | 'numero' | 'complemento' | 'moradores'
>;
