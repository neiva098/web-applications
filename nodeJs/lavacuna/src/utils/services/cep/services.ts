import findCep, { CEP } from 'cep-promise';
import { HttpError } from '../../errors/HttpError';

export const find = async (cep: string): Promise<CEP> => {
    try {
        return findCep(cep);
    } catch (err) {
        throw new HttpError(400, 'Cep não encontrado! Verifique e tente novamente.');
    }
};
