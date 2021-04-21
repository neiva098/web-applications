import { QueryByID } from './../interfaces/requests';
import { TableSelectInterface, QueryByCNPJAndName } from "../interfaces/requests"
import { pool } from "../db/postgres_client"
import { FornecedorInterface, ProdutoInterface, MercadoriaInterface, NFEntradaInterface, NFEntradaItemInterface, EstoqueInterface } from "../interfaces/interfaces"
import { generateInsertSQL, generateSelectSQL, generateUpdateSQL, generateDeleteSQL } from "../utils/sql"
import uuid = require("uuid")

export const getTable = async (data: TableSelectInterface) => {
    const script = `SELECT * from ${data.table_name}`
    const queryTableService = await pool.query(script)

    return queryTableService.rows
}

export const insertFornecedor = async (data: FornecedorInterface) => {
    const queryResult = await pool.query(generateInsertSQL('fornecedor', data), Object.values(data))

    return queryResult.rows[0]
}

export const insertProduto = async (data: ProdutoInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('produto', data), Object.values(data))

    return queryResult.rows[0]
}

export const removeProdutoByID = async (data: QueryByID) => {
    
    const queryResult =  await pool.query(generateDeleteSQL('produto', ['id']), Object.values(data))

    return queryResult.rows[0]
}

export const updateProduto = async (data: ProdutoInterface) => {
    const values = Object.values(data)
    values.push(data.id)
    const queryResult =  await pool.query(generateUpdateSQL('produto', data, ['id']), values)

    return queryResult.rows[0]
}

export const getProdutoByFornecedorAndNome = async (data: QueryByCNPJAndName) => {
    const script = `${generateSelectSQL('produto', Object.keys(data))}`
    const queryResult =  await pool.query(script, Object.values(data))

    return queryResult.rows[0]
}

export const getProdutoByFornecedor = async (data: QueryByID) => {
    const script = `${generateSelectSQL('produto', ['fk_fornecedor'])}`
    const queryResult =  await pool.query(script, Object.values(data))

    return queryResult.rows
}

export const insertMercadoria = async (data: MercadoriaInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('mercadoria', data), Object.values(data))

    return queryResult.rows[0]
}

export const getMercadoriasByCompraID = async (data: QueryByID) => {
    const script = `${generateSelectSQL('mercadoria', ['fk_compra'])}`
    const queryResult =  await pool.query(script, Object.values(data))
   
    return queryResult.rows
}

export const removeMercadoriaByID = async (data: QueryByID) => {
    
    const queryResult =  await pool.query(generateDeleteSQL('mercadoria', ['id']), Object.values(data))

    return queryResult.rows[0]
}


export const insertNFEntrada = async (data: NFEntradaInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('nfentrada', data), Object.values(data))

    return queryResult.rows[0]
}

export const insertNFEntradaItem = async (data: NFEntradaItemInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('nfentradaitem', data), Object.values(data))

    return queryResult.rows[0]
}

export const getnfItemByEntradaId = async (data: QueryByID) => {
    const script = `${generateSelectSQL('nfentradaitem', ['fk_nfentrada'])}`
    const queryResult =  await pool.query(script, Object.values(data))

    return queryResult.rows
}

export const removenfItemById = async (data: QueryByID) => {
    const queryResult =  await pool.query(generateDeleteSQL('nfentradaitem', ['id']), Object.values(data))

    return queryResult.rows[0]
}

export const insertEstoque = async (data: EstoqueInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('estoque', data), Object.values(data))

    return queryResult.rows[0]
}

export const removeEstoqueById = async (data: QueryByID) => {
    const queryResult =  await pool.query(generateDeleteSQL('estoque', ['id']), Object.values(data))

    return queryResult.rows[0]
}