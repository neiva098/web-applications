import { PropertieInterface } from "./propertie";
import { UserInterface } from "./user";

export interface VisitInterface {
    id: string;
    dataHora: string;
    propertieId: string;

    propertie?: PropertieInterface;
    person?: UserInterface;
    personId?: string;
}