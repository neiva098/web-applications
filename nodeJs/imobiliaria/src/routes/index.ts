import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../swagger';
import personRoutes from './person';
import propertieRoutes from './propertie';
import visitRoutes from './visit';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Imobiliaria Service 0.01');
});

router.use('/api/users', personRoutes);

router.use('/api/properties', propertieRoutes);

router.use('/api/visits', visitRoutes);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
