import { NextFunction, Request, Response, Router } from 'express'
import { index, store, like, dislike } from '../controllers/dev'

const routes = Router()

routes.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await index(req.get('user')!)

        res.json(users)
    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dev = await store(req.body)

        res.status(200).json(dev)
    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/likes/:devId', async (req: Request & any, res: Response, next: NextFunction) => {
    try {
        const loggedDev = await like(req.get('user')!, req.params.devId,<any> req.connectedUsers, <any> req.io)

        res.status(200).json(loggedDev)
    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/dislikes/:devId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loggedDev = await dislike(req.params.devId, req.get('user')!)

        res.status(200).json(loggedDev)
    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

export default routes