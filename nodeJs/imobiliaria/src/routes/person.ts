/* eslint-disable max-len */
import { Request, Response, Router } from 'express';
import * as controller from '../Entities/person/controller';
import * as validators from '../Entities/person/validator';
import { getValidData } from '../utils/validator';
import { authMidleware } from '../Entities/person/utils/auth';

const router = Router();

/**
 * @swagger
 *  definitions:
 *   User:
 *    properties:
 *     id:
 *      type: string
 *      description: Identificador do usuario
 *      example: 05fb8d22-e1b3-4691-8795-de87f65c0849
 *     name:
 *      type: string
 *      description: Nome do usuario
 *      example: Joao
 *     email:
 *      type: string
 *      description: Email do usuario
 *      example: joao@provider.com
 *     password:
 *      type: string
 *      description: Senha do usuario
 *      example: senhaaa
 *   CreateUser:
 *    properties:
 *     name:
 *      type: string
 *      description: Nome do usuario
 *      required: true
 *      example: Joao
 *     email:
 *      type: string
 *      description: Email do usuario
 *      required: true
 *      example: joao@provider.com
 *     password:
 *      type: string
 *      description: Senha do usuario
 *      required: true
 *      example: senhaaa
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

router.post(
    '/authenticate',
    validators.authValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const { token, user } = await controller.auth(body.email, body.password);

        return res.status(200).send({ token, ...user });
    },
);

router.use(authMidleware);

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
 *       - name: user
 *         description: JSON with user attributes.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CreateUser'
 *     responses:
 *       201:
 *         description: Successfull
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Bad Request
 *         schema:
 *           $ref: '#/definitions/BadRequest'
 */
router.post('/', validators.createValidator, async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const createdPerson = await controller.create(body);

    return res.status(201).send(createdPerson);
});

router.get('/', validators.queryValidator, async (req: Request, res: Response) => {
    const { query } = getValidData(req);

    const findedPerson = await controller.getOne(query);

    return res.status(200).send(findedPerson);
});

router.put(
    '/:id',
    validators.updateValidator,
    async (req: Request, res: Response) => {
        const { params, body } = getValidData(req);

        const updatedPerson = await controller.update(params.id, body);

        return res.status(200).send(updatedPerson);
    },
);

router.delete(
    '/:id',
    validators.deleteValidator,
    async (req: Request, res: Response) => {
        const { params } = getValidData(req);

        await controller.deletePerson(params.id);

        return res.status(200).send();
    },
);

export default router;
