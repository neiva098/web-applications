import { ValidationChain, body } from 'express-validator';
import { optionalObjectValidator } from '../../../utils/validators/common';
import {
    createValidator as createMedic,
    updateBodyValidator as updateMedic,
} from './medic/validators';

export const createValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.dataContrato`).isDate(),
        body(`${path}.salario`).isNumeric(),
        body(`${path}.senha`).isString().isLength({ min: 3 }),
        optionalObjectValidator(
            `${path}.medicProfile`,
            createMedic(`${path}.medicProfile`),
        ),
    ];
};

export const updateBodyValidator = (path: string): ValidationChain[] => {
    return [
        body(`${path}.dataContrato`).isDate().optional(),
        body(`${path}.salario`).isNumeric().optional(),
        body(`${path}.senha`).isString().isLength({ min: 3 }).optional(),
        optionalObjectValidator(
            `${path}.medicProfile`,
            updateMedic(`${path}.medicProfile`),
        ),
    ];
};
