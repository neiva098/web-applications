import { createQueryBuilder, DeleteResult, getRepository } from 'typeorm';
import { Visit } from '../../../database/entities/Visit';
import {
    CreateVisitType,
    QueryVisitsInterface,
    UpdateVisitType,
    VisitColums,
} from '../interfaces';

export const create = async (
    visitObject: CreateVisitType,
): Promise<CreateVisitType> => {
    const visitEntity = Object.assign(new Visit(), visitObject);

    const { raw } = await createQueryBuilder(Visit)
        .insert()
        .values(visitEntity)
        .returning('*')
        .execute();

    return raw[0];
};

export const deleteVisit = async (id: string): Promise<DeleteResult> => {
    return getRepository(Visit).delete({ id });
};

export const update = async (
    id: string,
    updates: UpdateVisitType,
    returning: '*' | VisitColums[] = ['dataHora', 'id', 'propertieId'],
): Promise<Visit | undefined> => {
    const updateRes = await createQueryBuilder()
        .update(Visit, Object.assign(new Visit(), updates))
        .where({ id })
        .returning(returning)
        .execute();

    return updateRes.raw;
};

export const getVisits = async (query: QueryVisitsInterface): Promise<Visit[]> => {
    return getRepository(Visit).find(query);
};
