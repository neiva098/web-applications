import { param } from 'express-validator';

export const getByIdValidator = [param(['id']).isUUID()];
