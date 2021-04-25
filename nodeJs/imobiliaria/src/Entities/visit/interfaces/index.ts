import { Person } from '../../../database/entities/Person';
import { Propertie } from '../../../database/entities/Propertie';

export interface VisitInterface {
    id: string;
    dataHora: string;
    propertieId: string;

    propertie?: Propertie;
    person?: Person;
    personId?: string;
}

export interface QueryVisitsInterface {
    propertieId?: string;
    id?: string;
    personId?: string;
}

export type CreateVisitType = Omit<VisitInterface, 'propertie' | 'person' | 'id'>;

export type UpdateVisitType = Omit<CreateVisitType, 'propertieId'>;

export type VisitColums = 'propertieId' | 'id' | 'dataHora';
