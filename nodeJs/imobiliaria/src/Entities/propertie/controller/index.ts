import { Propertie } from '../../../database/entities/Propertie';
import { HttpError } from '../../../utils/errors/HttpError';
import {
    CreatePropertieInterface,
    QueryPropertiesInterface,
    UpdatePropertieInterface,
} from '../interfaces';
import * as repository from '../repository';

export const create = async (
    ownerId: string,
    propertieBody: CreatePropertieInterface,
): Promise<Propertie> => {
    return repository.create(ownerId, propertieBody);
};

export const update = async (
    id: string,
    updateBody: UpdatePropertieInterface,
): Promise<Propertie> => {
    return repository.update(id, updateBody);
};

export const deletePropertie = async (id: string): Promise<void> => {
    const deleteResult = await repository.deletePropertie(id);

    if (deleteResult.affected !== 1) throw new HttpError(404, 'Not found');
};

export const findProperties = async (
    query: QueryPropertiesInterface,
): Promise<Propertie[]> => {
    return repository.getProperties(query);
};

export const getOne = async (id: string): Promise<Propertie> => {
    const res = await repository.getOne(id);

    if (!res) throw new HttpError(404, 'Person Not Found!');

    return res;
};
