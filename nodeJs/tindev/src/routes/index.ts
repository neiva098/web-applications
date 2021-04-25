import { NextFunction, Request, Response, Router } from 'express'
import devRoutes from  './devs'

const routes = Router()

routes.use('/devs', devRoutes)

export default routes