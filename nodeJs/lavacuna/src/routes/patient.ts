import { Request, Response, Router } from 'express';
import * as controller from '../entities/person/patient/controllers';
import { authMidleware } from '../entities/person/utils/auth';

const PatientRouter = Router();

PatientRouter.get(
    '/appointament/avaliable/:medic',
    async (req: Request, res: Response) => {
        const patients = await controller.getAppointammentPatients(req.params.medic);

        return res.status(200).send(patients);
    },
);

PatientRouter.use(authMidleware);

PatientRouter.get('/', async (req: Request, res: Response) => {
    const patients = await controller.getPatients();

    return res.status(200).send(patients);
});

export default PatientRouter;
