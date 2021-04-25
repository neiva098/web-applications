import { Request, Response, Router } from 'express';
import { authMidleware } from '../Entities/person/utils/auth';
import * as controller from '../Entities/visit/controller';
import * as validators from '../Entities/visit/validator';
import { getValidData } from '../utils/validator';

const router = Router();

router.use(authMidleware);

router.post('/', validators.createValidator, async (req: Request, res: Response) => {
    const { body } = getValidData(req);

    const createdVisit = await controller.create(req.headers.authorization!, body);

    return res.status(200).send(createdVisit);
});

router.delete(
    '/:id',
    validators.deleteValidator,
    async (req: Request, res: Response) => {
        const { params } = getValidData(req);

        await controller.deleteVisit(params.id);

        return res.status(200).send();
    },
);

router.put(
    '/:id',
    validators.updateValidator,
    async (req: Request, res: Response) => {
        const { params, body } = getValidData(req);

        const updatedPerson = await controller.update(params.id, body);

        return res.status(200).send(updatedPerson);
    },
);

router.get(
    '/',
    validators.queryVisitsValidator,
    async (req: Request, res: Response) => {
        const { query } = getValidData(req);

        const findedProperties = await controller.findVisits(query);

        return res.status(200).send(findedProperties);
    },
);

export default router;
