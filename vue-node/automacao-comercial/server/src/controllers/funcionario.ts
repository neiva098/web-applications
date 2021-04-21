import { QueryByID, QueryUser } from './../interfaces/requests';
import { pool } from '../db/postgres_client'

import { generateSelectSQL, generateInsertSQL, generateUpdateSQL, generateDeleteSQL } from '../utils/sql'
import { QueryByCPFInterface } from '../interfaces/requests'
import { FuncionarioInterface, CargoInterface, UsuarioInterface, FuncionalidadeInterface, PerfilInterface } from '../interfaces/interfaces'
import uuid = require('uuid')

export const insertFuncionario = async (data: FuncionarioInterface) => {
    const queryResult = await pool.query(generateInsertSQL('funcionario', data), Object.values(data))

    return queryResult.rows[0]
}

export const getFuncionario = async (data: QueryByCPFInterface) => {
    const script = `${generateSelectSQL('funcionario', ['cpf'])}`
    const queryResult =  await pool.query(script, [data.cpf])

    return queryResult.rows[0]
}

export const updateFuncionario = async (data: FuncionarioInterface) => {
    const values = Object.values(data)
    values.push(data.cpf)
    const queryResult =  await pool.query(generateUpdateSQL('crediario', data, ['id']), values)

    return queryResult.rows[0]
}

export const removeFuncionario = async (data: QueryByCPFInterface) => {
    const queryResult =  await pool.query(generateDeleteSQL('funcionario', ['cpf']), Object.values(data))

    return queryResult.rows[0]
}

export const insertCargo = async (data: CargoInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('cargo', data), Object.values(data))

    return queryResult.rows[0]
}

export const insertUser = async (data: UsuarioInterface) => {
    const queryResult = await pool.query(generateInsertSQL('usuario', data), Object.values(data))

    return queryResult.rows[0]
}

export const getUser = async (data: QueryUser) => {
    const queryResult = await pool.query(generateSelectSQL('usuario', Object.keys(data)), Object.values(data))

    return queryResult.rows[0]
}

export const insertFuncionalidade = async (data: FuncionalidadeInterface) => {
    data.id = uuid()
    const queryResult = await pool.query(generateInsertSQL('funcionalidade', data), Object.values(data))

    return queryResult.rows[0]
}

export const insertPerfil = async (data: PerfilInterface) => {
    const queryResult = await pool.query(generateInsertSQL('perfil', data), Object.values(data))

    return queryResult.rows[0]
}

export const getFuncionalidadeByCargo = async (data: QueryByID) => {
    const queryPerfil = await pool.query(generateSelectSQL('peril', ['fk_cargo']), Object.values(data))

    const queryResult = await pool.query(generateSelectSQL('funcionalidade', ['id']), queryPerfil.rows[0].fk_funcionalidade)
    
    return queryResult.rows
}
