import { ValidationChain, body } from 'express-validator';

export const createValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.peso`).isNumeric(),
        body(`${path}.altura`).isNumeric(),
        body(`${path}.tipoSanguineo`).isString().isLength({ min: 2, max: 2 }),
    ];
};

export const updateBodyValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.peso`).isNumeric().optional(),
        body(`${path}.altura`).isNumeric().optional(),
        body(`${path}.tipoSanguineo`)
            .isString()
            .isLength({ min: 2, max: 2 })
            .optional(),
    ];
};
