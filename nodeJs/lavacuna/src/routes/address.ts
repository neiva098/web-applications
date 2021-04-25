/* eslint-disable max-len */
import { Request, Response, Router } from 'express';
import * as controller from '../entities/address/controllers';
import * as validators from '../entities/address/validators';
import { authMidleware } from '../entities/person/utils/auth';
import { getValidData } from '../utils/validators';

const AddressRouter = Router();

AddressRouter.post(
    '/',
    validators.createValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const createdAddress = await controller.create(body);

        return res.status(201).send(createdAddress);
    },
);

AddressRouter.get(
    '/',
    validators.findValidator,
    async (req: Request, res: Response) => {
        const { query } = getValidData(req);

        const address = await controller.findOne(query.cep, query.codigo);

        return res.status(200).send(address);
    },
);

AddressRouter.use(authMidleware);

AddressRouter.get('/all', async (req: Request, res: Response) => {
    const addresses = await controller.getAddresses();

    return res.status(200).send(addresses);
});

export default AddressRouter;
