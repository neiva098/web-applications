import { body } from 'express-validator';
import { optionalObjectValidator } from '../../utils/validators/common';
import {
    createBodyValidator as createAddressValidator,
    updateBodyValidator as updateAddressValidator,
} from '../address/validators';
import {
    createValidator as createEmployeeValidator,
    updateBodyValidator as updateEmployeeValidator,
} from './employee/validators';
import {
    createValidator as createPatientValidator,
    updateBodyValidator as updatePatientValidator,
} from './patient/validators';

export const createValidator = [
    body('nome').isString(),
    body('email').isString().isEmail(),
    body('telefone').isString().isNumeric().isLength({ max: 14 }),
    ...createAddressValidator('endereco'),
    optionalObjectValidator(
        'employeeProfile',
        createEmployeeValidator('employeeProfile'),
    ),
    optionalObjectValidator(
        'patientProfile',
        createPatientValidator('patientProfile'),
    ),
];

export const updateBodyValidator = [
    body('nome').isString().optional(),
    body('email').isString().isEmail().optional(),
    body('telefone').isString().isNumeric().isLength({ max: 14 }).optional(),
    optionalObjectValidator('endereco', updateAddressValidator('endereco')),
    optionalObjectValidator(
        'employeeProfile',
        updateEmployeeValidator('employeeProfile'),
    ),
    optionalObjectValidator(
        'patientProfile',
        updatePatientValidator('patientProfile'),
    ),
];

export const authValidator = [
    body('password').isString().isLength({ min: 3 }),
    body('email').isEmail(),
];
