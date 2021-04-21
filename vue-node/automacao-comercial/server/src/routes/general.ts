import { NextFunction, Request, Response, Router } from 'express'
import { TableSelectInterface, QueryByID, QueryByCNPJAndName } from '../interfaces/requests'
import { getTable, insertFornecedor, insertProduto, insertMercadoria, insertNFEntrada, insertNFEntradaItem, insertEstoque, removeProdutoByID, updateProduto, getProdutoByFornecedorAndNome, getProdutoByFornecedor, getMercadoriasByCompraID, removeMercadoriaByID, getnfItemByEntradaId, removenfItemById, removeEstoqueById } from '../controllers/general'
import { FornecedorInterface, ProdutoInterface, MercadoriaInterface, NFEntradaInterface, NFEntradaItemInterface, EstoqueInterface } from '../interfaces/interfaces'

const routes = Router()

/*
{
	"table_name": ""
}
*/
routes.post('/getTable', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: TableSelectInterface = req.body
        const retDist = await getTable(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
	
}
*/
routes.post('/insertFornecedor', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: FornecedorInterface = req.body
        const retDist = await insertFornecedor(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
	
}
*/
routes.post('/insertProduto', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: ProdutoInterface = req.body
        const retDist = await insertProduto(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/deleteProduto', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await removeProdutoByID(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})


routes.post('/updateProduto', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: ProdutoInterface = req.body
        const retDist = await updateProduto(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/getProduto', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data:  QueryByCNPJAndName = req.body
        const retDist = await getProdutoByFornecedorAndNome(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/produto/Fornecedor', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data:  QueryByID = req.body
        const retDist = await getProdutoByFornecedor(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
	
}
*/
routes.post('/insertMercadoria', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: MercadoriaInterface = req.body
        const retDist = await insertMercadoria(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/compra/mercadoria', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await getMercadoriasByCompraID(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/deleteMercadoria', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await removeMercadoriaByID(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
	
}
*/
routes.post('/insertNFEntrada', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: NFEntradaInterface = req.body
        const retDist = await insertNFEntrada(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
	
}
*/
routes.post('/insertNFEntradaItem', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: NFEntradaItemInterface = req.body
        const retDist = await insertNFEntradaItem(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/nfEntrada/item', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await getnfItemByEntradaId(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/deleteNFitem', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await removenfItemById(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

/*
{
	
}
*/
routes.post('/insertEstoque', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: EstoqueInterface = req.body
        const retDist = await insertEstoque(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})

routes.post('/removeEstoque', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data: QueryByID = req.body
        const retDist = await removeEstoqueById(data)

        return res.status(200).json(retDist)

    } catch (error) {
        next({ code: error.statusCode, message: error.message })
    }
})
export default routes