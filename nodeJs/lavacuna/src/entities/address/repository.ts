import { getRepository } from 'typeorm';
import { Address } from '../../database/entities/Address';
import { removeUndefinedQuery } from '../../utils/repository';
import { AddressKeys, CreateAddressInterface } from './interfaces';

export const create = async (address: CreateAddressInterface): Promise<Address> => {
    const addressEntity = Object.assign(new Address(), address);

    return getRepository(Address).save(addressEntity);
};

export const findOne = async (
    cep?: string,
    codigo?: string,
    select?: AddressKeys[],
): Promise<Address | undefined> => {
    const query = removeUndefinedQuery({ cep, codigo });

    return getRepository(Address).findOne(query, { select });
};

export const getAddresses = async (): Promise<Address[]> => {
    return getRepository(Address).find();
};
