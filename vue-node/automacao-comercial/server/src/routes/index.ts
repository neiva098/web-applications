import { Request, Response, Router } from 'express'
import * as swaggerUi from 'swagger-ui-express'

import { swaggerSpec } from '../swagger'
import funcionarioslRoutes from './funcionarios'
import generalRoutes from './general'
import clientesRoutes from './clientes'

const apiRoutes = Router()

apiRoutes.get('/', (req: Request, res: Response) => {
    res.send('Comercial Service 1.0.0')
})
apiRoutes.get('/api-docs', swaggerUi.setup(swaggerSpec), swaggerUi.generateHTML)
apiRoutes.use('/api/funcionarios', funcionarioslRoutes)
apiRoutes.use('/api/general', generalRoutes)
apiRoutes.use('/api/clientes', clientesRoutes)

export default apiRoutes
