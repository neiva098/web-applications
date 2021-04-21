import { removeFuncionario } from './../controllers/funcionario';
import { NextFunction, Request, Response, Router } from 'express'
import { FuncionarioInterface, CargoInterface, UsuarioInterface, FuncionalidadeInterface, PerfilInterface } from '../interfaces/interfaces'
import { QueryByCPFInterface, QueryUser, QueryByID } from '../interfaces/requests'
import { insertFuncionario, getFuncionario, insertCargo, insertUser, insertFuncionalidade, insertPerfil, updateFuncionario, getUser, getFuncionalidadeByCargo } from '../controllers/funcionario'
import * as uuid from 'uuid/v4'


const routes = Router()

/*
{
    "nome": "value",
    "e_mail": "value",
    "cpf": "value",
    "salario": 135.6,
    "fk_cargo": "value"
}
*/
routes.post('/insertFuncionario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: FuncionarioInterface = req.body
        const retDist = await insertFuncionario(data)

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
routes.post('/funcionarioByCPF', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const retDist: QueryByCPFInterface = await getFuncionario(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/updateFuncionario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const retDist: any = await updateFuncionario(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/deleteFuncionario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const retDist: any = await removeFuncionario(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
    "nome_cargo": "value"
}
*/
routes.post('/insertCargo', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: CargoInterface = req.body
        data.id = uuid()
        const retDist = await insertCargo(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
    "login": "value",
    "senha": "value",
    "nome": "value",
    "fk_funcionario": "value",
}
*/
routes.post('/insertUsuario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: UsuarioInterface = req.body
        const retDist = await insertUser(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/getUsuario', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryUser = req.body
        const retDist = await getUser(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
    "id": "value",
    "descricao": "value",
}
*/
routes.post('/insertFuncionalidade', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: FuncionalidadeInterface = req.body
        const retDist = await insertFuncionalidade(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
    "fk_cargo": "value",
    "fk_funcionalidade": "value",
}
*/
routes.post('/insertPerfil', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: PerfilInterface = req.body
        const retDist = await insertPerfil(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/getFuncionalidade', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await getFuncionalidadeByCargo(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

export default routes
