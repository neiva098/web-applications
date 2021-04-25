import { ValidationChain, body, query, oneOf } from 'express-validator';

export const createValidator = [
    body('logradouro').isString(),
    body('bairro').isString(),
    body('cep').isString().isLength({ min: 8, max: 8 }),
    body('estado').isString().isLength({ min: 2, max: 2 }),
    body('cidade').isString(),
    body('numero').isNumeric().optional(),
    body('complemento').isString().optional(),
    body('codigo').optional(),
];

export const findValidator = [
    oneOf([
        query('cep').isString().isLength({ min: 8, max: 8 }),
        query('codigo').isUUID(),
    ]),
];

export const createBodyValidator = (path: string): ValidationChain[] => {
    return [
        body('codigo').optional(),
        body(`${path}.logradouro`).isString(),
        body(`${path}.bairro`).isString(),
        body(`${path}.cep`).isString().isLength({ min: 8, max: 8 }),
        body(`${path}.estado`).isString().isLength({ min: 2, max: 2 }),
        body(`${path}.cidade`).isString(),
        body(`${path}.numero`).isNumeric().optional(),
        body(`${path}.complemento`).isString().optional(),
    ];
};

export const updateBodyValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.logradouro`).isString().optional(),
        body(`${path}.bairro`).isString().optional(),
        body(`${path}.cep`).isString().isLength({ min: 8, max: 8 }).optional(),
        body(`${path}.estado`).isString().isLength({ min: 2, max: 2 }).optional(),
        body(`${path}.cidade`).isString().optional(),
        body(`${path}.numero`).isNumeric().optional(),
        body(`${path}.complemento`).isString().optional(),
    ];
};
