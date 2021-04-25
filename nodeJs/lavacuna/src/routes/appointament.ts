import { Request, Response, Router } from 'express';
import * as controller from '../entities/appointament/controllers';
import * as validators from '../entities/appointament/validators';
import { authMidleware } from '../entities/person/utils/auth';
import { getValidData } from '../utils/validators';

const AppointamentRouter = Router();

AppointamentRouter.post(
    '/',
    validators.createValidator,
    async (req: Request, res: Response) => {
        const { body } = getValidData(req);

        const createdAppointament = await controller.create(body);

        return res.status(201).send(createdAppointament);
    },
);

AppointamentRouter.get('/avaliable/:medico', async (req: Request, res: Response) => {
    const avaliableAppointaments = await controller.getAvaliable(req.params.medico);

    return res.status(200).send(avaliableAppointaments);
});

AppointamentRouter.use(authMidleware);

AppointamentRouter.get('/', async (req: Request, res: Response) => {
    const appointaments = await controller.getAppointaments();

    return res.status(200).send(appointaments);
});

AppointamentRouter.get('/:medico', async (req: Request, res: Response) => {
    const appointaments = await controller.getAppointmentsByMedico(
        req.params.medico,
    );

    return res.status(200).send(appointaments);
});

export default AppointamentRouter;
