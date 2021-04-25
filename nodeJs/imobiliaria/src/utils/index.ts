import { SelectQueryBuilder } from 'typeorm';

export const buildWhere = <T>(
    qb: SelectQueryBuilder<T>,
    key: string,
    value?: string,
): SelectQueryBuilder<T> => {
    return value ? qb.andWhere(`${key} = '${value}'`) : qb;
};
