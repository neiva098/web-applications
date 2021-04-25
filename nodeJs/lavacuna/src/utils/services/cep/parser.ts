import { CEP } from 'cep-promise';
import { CepResponse } from './interfaces';

export const parseResponse = async (
    addressData: Omit<CEP, 'service'>,
): Promise<CepResponse> => {
    return {
        bairro: addressData.neighborhood,
        cep: addressData.cep,
        cidade: addressData.city,
        logradouro: addressData.street,
        estado: addressData.state,
    };
};
