import { body, param } from 'express-validator';

const dhValidator = body('dataHora')
    .isString()
    .matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0,3]0:00.000Z/)
    .custom(value => {
        if (new Date(value) < new Date())
            throw new Error('Date of appointment invalid');

        return true;
    });

export const createValidator = [
    body('codigoMedico').isUUID(),
    body('codigoPaciente').isUUID(),
    dhValidator,
];

export const updateValidator = [param('codigo').isUUID(), dhValidator];
