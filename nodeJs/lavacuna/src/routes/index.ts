import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../swagger';
import AddressRouter from './address';
import AppointamentRouter from './appointament';
import MedicRouter from './medic';
import PatientRouter from './patient';
import UserRouter from './person';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('LaVacuna Service 0.01');
});

router.use('/api/users', UserRouter);
router.use('/api/address', AddressRouter);
router.use('/api/appointament', AppointamentRouter);
router.use('/api/medic', MedicRouter);
router.use('/api/patient', PatientRouter);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
