import { body, ValidationChain } from 'express-validator';

export const optionalObjectValidator = (
    path: string,
    internalValidator: ValidationChain[],
): ValidationChain => {
    return body(path).custom(async (value, { req }) => {
        if (value) {
            return Promise.all(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                internalValidator.map((validator: any) => {
                    if (validator.run) return validator.run(req);
                    return validator(path, req);
                }),
            );
        }
        return true;
    });
};
