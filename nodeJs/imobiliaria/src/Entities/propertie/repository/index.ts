import { DeleteResult, getRepository } from 'typeorm';
import { Propertie } from '../../../database/entities/Propertie';
import { buildWhere } from '../../../utils';
import {
    CreatePropertieInterface,
    QueryPropertiesInterface,
    UpdatePropertieInterface,
} from '../interfaces';

export const create = async (
    ownerId: string,
    propertie: CreatePropertieInterface,
): Promise<Propertie> => {
    const propertieEntity = Object.assign(new Propertie(), propertie, { ownerId });

    return getRepository(Propertie).save(propertieEntity);
};

export const update = async (
    id: string,
    updates: UpdatePropertieInterface,
): Promise<Propertie> => {
    const propertieEntity = Object.assign(new Propertie(), updates, { id });

    return getRepository(Propertie).save(propertieEntity);
};

export const deletePropertie = async (id: string): Promise<DeleteResult> => {
    return getRepository(Propertie).delete({ id });
};

export const getProperties = async (
    query: QueryPropertiesInterface,
): Promise<Propertie[]> => {
    const qb = getRepository(Propertie)
        .createQueryBuilder('propertie')
        .innerJoinAndSelect('propertie.adress', 'adresses');

    buildWhere(qb, 'adresses.bairro', query.bairro);
    buildWhere(qb, 'adresses.logradouro', query.logradouro);
    buildWhere(qb, 'adresses.cep', query.cep);
    buildWhere(qb, 'adresses.uf', query.uf);
    buildWhere(qb, '"type"', query.type);
    buildWhere(qb, '"roomsAmount"', query.roomsAmount);
    buildWhere(qb, '"suitesAmount"', query.suitesAmount);
    buildWhere(qb, '"livingRoomsAmount"', query.livingRoomsAmount);
    buildWhere(qb, '"diningRoomsAmount"', query.diningRoomsAmount);
    buildWhere(qb, '"parkingAmount"', query.parkingAmount);
    buildWhere(qb, '"builtInCabinetsAmount"', query.builtInCabinetsAmount);

    return qb.getMany();
};

export const getOne = async (id: string): Promise<Propertie | undefined> => {
    return getRepository(Propertie).findOne({ id }, { relations: ['adress'] });
};
