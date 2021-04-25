import { ValidationChain, body } from 'express-validator';

export const createValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.crm`).isString(),
        body(`${path}.especialidade`).isString(),
    ];
};

export const updateBodyValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.crm`).isString().optional(),
        body(`${path}.especialidade`).isString().optional(),
    ];
};
