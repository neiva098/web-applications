import { body, oneOf, param, query } from 'express-validator';

export const createValidator = [
    body('name').isString(),
    body('email').isEmail(),
    body('password').isString().isLength({ min: 5 }),
];

export const authValidator = [
    body('password').isString().isLength({ min: 5 }),
    body('email').isEmail(),
];

export const queryValidator = [
    oneOf([
        query('name').isString(),
        query('id').isUUID(),
        query('email').isEmail(),
    ]),
];

export const updateValidator = [
    body('name').optional().isString(),
    body('id').optional().isUUID(),
    body('email').optional().isEmail(),
    param('id').isUUID(),
];

export const deleteValidator = [param('id').isUUID()];
