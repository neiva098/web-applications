import { Visit } from '../../../database/entities/Visit';
import { HttpError } from '../../../utils/errors/HttpError';
import {
    CreateVisitType,
    QueryVisitsInterface,
    UpdateVisitType,
} from '../interfaces';

import * as repository from '../repository';
import { formatDate } from '../utils';

export const create = async (
    userId: string,
    visitBody: CreateVisitType,
): Promise<CreateVisitType> => {
    try {
        return await repository.create({
            personId: userId,
            ...visitBody,
            dataHora: formatDate(visitBody.dataHora),
        });
    } catch (e) {
        throw new HttpError(
            400,
            'Já existe visita neste horario, horário inválido ou esta propriedade não existe',
        );
    }
};

export const deleteVisit = async (id: string): Promise<void> => {
    const deleteResult = await repository.deleteVisit(id);

    if (deleteResult.affected !== 1) throw new HttpError(404, 'Not found');
};

export const update = async (
    id: string,
    updates: UpdateVisitType,
): Promise<Visit | undefined> => {
    const res = await repository.update(id, updates);

    if (!res) throw new HttpError(404, 'Person Not Found!');

    return res;
};

export const findVisits = async (query: QueryVisitsInterface): Promise<Visit[]> => {
    return repository.getVisits(query);
};
