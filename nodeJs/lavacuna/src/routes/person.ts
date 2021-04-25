/* eslint-disable max-len */
import { Request, Response, Router } from 'express';
import * as controller from '../entities/person/controllers';
import { authMidleware } from '../entities/person/utils/auth';
import * as validators from '../entities/person/validators';
import { getValidData } from '../utils/validators';

const UserRouter = Router();

/**
 * @swagger
 *  definitions:
 *   BadRequest:
 *    properties:
 *     code:
 *      type: number
 *      description: Codigo da resposta http
 *      required: true
 *      example: 400
 *     message:
 *      type: string
 *      description: Descrição do erro
 *      required: true
 *      example: Bad Request
 *     errors:
 *       type: array
 *       items:
 *          properties:
 *            msg:
 *              type: string
 *              example: Invalid value
 *            param:
 *              type: string
 *              example: password
 *            location:
 *              type: string
 *              example: body
 */

UserRouter.post(
    '/auth',
    validators.authValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const response = await controller.auth(body);

        return res.status(200).send(response);
    },
);

UserRouter.use(authMidleware);

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - User
 *     description: Criação de usuário
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: authorization
 *         type: string
 *         required: true
 *         description: Token de acesso
 *         example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0ODViOTc3LTkyZTgtNGRjMy04NmRjLTY1YzIzMzNkN2QwZSIsImlhdCI6MTYxMzYxNzIwNiwiZXhwIjoxNjEzNzAzNjA2fQ.3QSRQnAFW1c2D_72UP39p4gV01ncw0dN9e22SaqVLzg
 *     responses:
 *       400:
 *         description: Bad Request
 *         schema:
 *           $ref: '#/definitions/BadRequest'
 */
UserRouter.post(
    '/',
    validators.createValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const createdPerson = await controller.create(body);

        return res.status(201).send(createdPerson);
    },
);

UserRouter.get('/employees', async (req: Request, res: Response) => {
    const employees = await controller.getEmployess();

    return res.status(200).send(employees);
});

export default UserRouter;
