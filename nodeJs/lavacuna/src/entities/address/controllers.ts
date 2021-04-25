import * as repository from './repository';
import { Address } from '../../database/entities/Address';
import { CreateAddressInterface, FindByCep } from './interfaces';
import { HttpError } from '../../utils/errors/HttpError';

export const create = async (
    addressBody: CreateAddressInterface,
): Promise<Address> => {
    try {
        return await repository.create(addressBody);
    } catch {
        throw new HttpError(400, 'Dados do endereço inválidos');
    }
};

export const findOne = async (cep?: string, codigo?: string): Promise<FindByCep> => {
    const address = await repository.findOne(cep, codigo, [
        'bairro',
        'cep',
        'cidade',
        'estado',
        'logradouro',
        'codigo',
    ]);

    if (!address) throw new HttpError(404, 'Address not found');

    return address;
};

export const getAddresses = async (): Promise<Address[]> => {
    return repository.getAddresses();
};
