import { NextFunction, Request, Response, Router } from 'express'
import { ClienteInterface, CrediarioInterface, CompraInterface } from '../interfaces/interfaces'
import { QueryByCPFInterface, QueryByID } from '../interfaces/requests'
import { insertCLiente, getCliente, insertCrediario, insertCompra, updateCliente, getCrediarioByCliente, updateCrediarioById, getCompraByCPF, removeCliente } from '../controllers/cliente'


const routes = Router()

/*
{
    "nome": "value",
    "e_mail": "value",
    "cpf": "value",
    "endereco": "value",
    "telefone":  "value",
}
*/
routes.post('/insertCliente', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: ClienteInterface = req.body
        const retDist = await insertCLiente(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
    "cpf": "value"
}
*/
routes.post('/clienteByCPF', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const retDist: QueryByCPFInterface = await getCliente(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/updateCliente', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const retDist: ClienteInterface = await updateCliente(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/deleteCliente', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const retDist: QueryByCPFInterface = await removeCliente(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})


/*
{
    "id": "value",
    "fk_funcionalidade": "value",
    "dt_liberacao": date,
    "dt_expiracao": date,
    "limite": number,
    "uso": number,
    "ativo": boolean,
    "fk_usuario": "string",
    "fk_cliente": "string"
}
*/
routes.post('/insertCrediario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: CrediarioInterface = req.body
        const retDist = await insertCrediario(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/getCrediario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByCPFInterface = req.body
        const retDist = await getCrediarioByCliente(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/updateCrediario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: CrediarioInterface = req.body
        const retDist = await updateCrediarioById(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
}
*/
routes.post('/insertCompra', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: CompraInterface = req.body
        const retDist = await insertCompra(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/getCompra', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await getCompraByCPF(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

export default routes
