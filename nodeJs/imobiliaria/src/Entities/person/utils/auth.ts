import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { Person } from '../../../database/entities/Person';
import { HttpError } from '../../../utils/errors/HttpError';

export const authenticate = async (
    user: Person,
    password: string,
): Promise<{ user?: Person; token?: string }> => {
    if (!(await user?.compareHash(password)))
        throw new HttpError(400, 'User not authorized');

    return {
        user,
        token: user?.generateToken(),
    };
};

export const authMidleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<unknown> => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ error: 'No token provided' });
    }

    try {
        const decoded = (await promisify(jwt.verify)(token, 'secret')) as {
            id: string;
        };

        req.headers.authorization = decoded.id;

        return next();
    } catch (err) {
        return res.status(401).send({ statusCode: 401, errors: 'Token invalid' });
    }
};
