import { QueryByID, QueryByCPFInterface } from './../interfaces/requests';
import { ClienteInterface, CrediarioInterface, CompraInterface } from "../interfaces/interfaces"
import { pool } from "../db/postgres_client"
import { generateInsertSQL, generateSelectSQL, generateUpdateSQL, generateDeleteSQL } from "../utils/sql"
import uuid = require("uuid")

export const insertCLiente = async (data: ClienteInterface) => {
    const queryResult = await pool.query(generateInsertSQL('cliente', data), Object.values(data))

    return queryResult.rows[0]
}

export const getCliente = async (data: QueryByCPFInterface) => {
    const script = `${generateSelectSQL('cliente', ['cpf'])}`
    const queryResult =  await pool.query(script, [data.cpf])

    return queryResult.rows[0]
}

export const updateCliente = async (data: ClienteInterface) => {
    const values = Object.values(data)
    values.push(data.cpf)
    const queryResult =  await pool.query(generateUpdateSQL('cliente', data, ['cpf']), values)

    return queryResult.rows[0]
}

export const removeCliente = async (data: QueryByCPFInterface) => {
    const queryResult =  await pool.query(generateDeleteSQL('cliente', Object.keys(data)), Object.values(data))

    return queryResult.rows[0]
}

export const insertCrediario = async (data: CrediarioInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('crediario', data), Object.values(data))

    return queryResult.rows[0]
}

export const getCrediarioByCliente = async (data: QueryByCPFInterface) => {
    const queryResult = await pool.query(generateSelectSQL('crediario', Object.keys(data)), Object.values(data))

    return queryResult.rows[0]
}

export const updateCrediarioById = async (data: CrediarioInterface) => {
    const values = Object.values(data)
    values.push(data.id)
    const queryResult =  await pool.query(generateUpdateSQL('crediario', data, ['id']), values)

    return queryResult.rows[0]
}

export const insertCompra = async (data: CompraInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('compra', data), Object.values(data))

    return queryResult.rows[0]
}

export const getCompraByCPF = async (data: QueryByID) => {
    const script = `${generateSelectSQL('compra', ['fk_cliente'])}`
    const queryResult =  await pool.query(script, Object.values(data))

    return queryResult.rows[0]
}