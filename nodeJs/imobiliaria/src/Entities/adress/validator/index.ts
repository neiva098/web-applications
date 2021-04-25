import { ValidationChain, body } from 'express-validator';

export const createValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.logradouro`).isString(),
        body(`${path}.bairro`).isString(),
        body(`${path}.numero`).isString(),
        body(`${path}.cep`).isString(),
        body(`${path}.uf`).isString(),
        body(`${path}.complemento`).isString().optional(),
    ];
};

export const updateBodyValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.logradouro`).isString().optional(),
        body(`${path}.bairro`).isString().optional(),
        body(`${path}.numero`).isString().optional(),
        body(`${path}.cep`).isString().optional(),
        body(`${path}.uf`).isString().optional(),
        body(`${path}.complemento`).isString().optional(),
    ];
};
