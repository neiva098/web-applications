import { NextFunction, Request, Response } from 'express';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { Person } from '../../../database/entities/Person';
import { HttpError } from '../../../utils/errors/HttpError';

export const authenticate = async (
    user: Person,
    password: string,
): Promise<{ token?: string } & Person> => {
    if (!(await user.employeeProfile?.compareHash(password)))
        throw new HttpError(403, 'User not authorized');

    return {
        ...user,
        token: user.employeeProfile?.generateToken(),
    };
};

export const authMidleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<unknown> => {
    const token = req.headers.authorization;

    if (!token) {
        throw new HttpError(400, 'No token provided');
    }

    try {
        const decoded = (await promisify(jwt.verify)(token, 'secret')) as {
            id: string;
        };

        req.headers.authorization = decoded.id;

        return next();
    } catch (err) {
        throw new HttpError(403, 'Not authorized');
    }
};
