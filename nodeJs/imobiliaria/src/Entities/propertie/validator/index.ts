import {
    body,
    CustomValidator,
    param,
    query,
    ValidationChain,
} from 'express-validator';
import {
    createValidator as createAddressValidator,
    updateBodyValidator,
} from '../../adress/validator';

const validateApartamentProps: CustomValidator = (
    value: 'casa' | 'apartamento',
    { req },
) => {
    if (value === 'apartamento') {
        return apartamentCreateValidator.map(validator => validator.run(req));
    }

    return true;
};

const apartamentCreateValidator = [
    body('floor').isInt(),
    body('condominiumValue').isNumeric(),
    body('fullConcierge').isBoolean(),
];

export const createPropertieValidator = [
    body('type').isIn(['casa', 'apartamento']).custom(validateApartamentProps),
    body('roomsAmount').isInt(),
    body('suitesAmount').isInt(),
    body('livingRoomsAmount').isInt(),
    body('diningRoomsAmount').isInt(),
    body('parkingAmount').isInt(),
    body('builtInCabinetsAmount').isInt(),
    body('rentValue').isNumeric(),
    body('description').isString().optional(),
    body('adress').exists(),
    createAddressValidator('adress'),
] as ValidationChain[];

export const updateValidator = [
    param('id').isUUID(),
    body('type').isIn(['casa', 'apartamento']).optional(),
    body('floor').isInt().optional(),
    body('condominiumValue').isNumeric().optional(),
    body('fullConcierge').isBoolean().optional(),
    body('roomsAmount').isInt().optional(),
    body('suitesAmount').isInt().optional(),
    body('livingRoomsAmount').isInt().optional(),
    body('diningRoomsAmount').isInt().optional(),
    body('parkingAmount').isInt().optional(),
    body('builtInCabinetsAmount').isInt().optional(),
    body('rentValue').isNumeric().optional(),
    body('description').isString().optional(),
    body('adress').exists().optional(),
    updateBodyValidator('adress'),
] as ValidationChain[];

export const queryPropertiesValidator = [
    query('logradouro').isString().optional(),
    query('bairro').isString().optional(),
    query('cep').isString().optional(),
    query('uf').isString().optional(),
    query('type').isIn(['casa', 'apartamento']).optional(),
    query('roomsAmount').isInt().optional(),
    query('suitesAmount').isInt().optional(),
    query('livingRoomsAmount').isInt().optional(),
    query('diningRoomsAmount').isInt().optional(),
    query('parkingAmount').isInt().optional(),
    query('builtInCabinetsAmount').isInt().optional(),
];

export const deleteValidator = [param('id').isUUID()];

export const getByIdValidator = [param('id').isUUID()];
