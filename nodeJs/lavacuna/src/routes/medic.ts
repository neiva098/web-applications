import { Request, Response, Router } from 'express';
import * as controller from '../entities/person/employee/medic/controllers';
import { authMidleware } from '../entities/person/utils/auth';

const MedicRouter = Router();

MedicRouter.get('/especialidades', async (_: Request, res: Response) => {
    const especialidades = await controller.getEspecialidades();

    return res.status(200).send(especialidades);
});

MedicRouter.get('/especialidade', async (req: Request, res: Response) => {
    const medics = await controller.getByEspecialidade(
        req.query.especialidade as string,
    );

    return res.status(200).send(medics);
});

MedicRouter.use(authMidleware);

MedicRouter.get('/', async (req: Request, res: Response) => {
    const medics = await controller.getMedics();

    return res.status(200).send(medics);
});

export default MedicRouter;
