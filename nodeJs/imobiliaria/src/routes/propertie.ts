import { Request, Response, Router } from 'express';
import { authMidleware } from '../Entities/person/utils/auth';
import * as controller from '../Entities/propertie/controller';
import * as validators from '../Entities/propertie/validator';
import { getValidData } from '../utils/validator';

const router = Router();

router.use(authMidleware);

router.post(
    '/',
    validators.createPropertieValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const createdPropertie = await controller.create(
            req.headers.authorization!,
            body,
        );

        return res.status(201).send(createdPropertie);
    },
);

router.put(
    '/:id',
    validators.updateValidator,
    async (req: Request, res: Response) => {
        const { body, params } = getValidData(req);

        const updatedPropertie = await controller.update(params.id, body);

        return res.status(200).send(updatedPropertie);
    },
);

router.delete(
    '/:id',
    validators.deleteValidator,
    async (req: Request, res: Response) => {
        const { params } = getValidData(req);

        await controller.deletePropertie(params.id);

        return res.status(200).send();
    },
);

router.get(
    '/',
    validators.queryPropertiesValidator,
    async (req: Request, res: Response) => {
        const { query } = getValidData(req);

        const findedProperties = await controller.findProperties(query);

        return res.status(200).send(findedProperties);
    },
);

router.get(
    '/:id',
    validators.getByIdValidator,
    async (req: Request, res: Response) => {
        const { params } = getValidData(req);

        const findedPropertie = await controller.getOne(params.id);

        return res.status(200).send(findedPropertie);
    },
);

export default router;
