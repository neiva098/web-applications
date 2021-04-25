import { AddressInterface } from '../../../entities/address/interfaces';
import { parseResponse } from './parser';
import { find } from './services';

export const findAddress = async (cep: string): Promise<AddressInterface> => {
    const cepAddress = await find(cep);

    return parseResponse(cepAddress);
};
