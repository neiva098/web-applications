export interface AddressInterface {
    propertieId?: string;
    logradouro: string;
    bairro: string;
    numero: string;
    cep: string;
    uf: string;
    complemento?: string;
}

export type CreateAddressInterface = Omit<AddressInterface, 'propertieId'>;

export type UpdateAddressInterface = Omit<
    Partial<CreateAddressInterface>,
    'propertieId'
>;

export type AddressReturnColumns =
    | 'propertieId'
    | 'logradouro'
    | 'bairro'
    | 'numero'
    | 'cep'
    | 'uf'
    | 'complemento';
