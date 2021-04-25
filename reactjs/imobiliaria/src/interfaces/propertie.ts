import { CreateAddressInterface } from "./address";
import { UserInterface } from "./user";

export interface PropertieInterface {
    id?: string;
    type: 'casa' | 'apartamento';
    roomsAmount: number;
    suitesAmount: number;
    livingRoomsAmount: number;
    diningRoomsAmount: number;
    parkingAmount: number;
    builtInCabinetsAmount: number;
    rentValue: number;

    floor?: number;
    condominiumValue?: number;
    fullConcierge?: boolean;

    description?: string;

    ownerId: string;
    adress: CreateAddressInterface;
    owner: UserInterface;
}

export interface QueryPropertiesInterface {
    type?: 'casa' | 'apartamento';
    roomsAmount?: string;
    suitesAmount?: string;
    livingRoomsAmount?: string;
    diningRoomsAmount?: string;
    parkingAmount?: string;
    builtInCabinetsAmount?: string;

    logradouro?: string;
    bairro?: string;
    cep?: string;
    uf?: string;
}

export type CreatePropertieInterface = Omit<PropertieInterface, 'id' | 'owner' | 'ownerId'>;
export type UpdatePropertieInterface = Partial<CreatePropertieInterface>;
