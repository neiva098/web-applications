export interface TableSelectInterface {
    table_name: string,
}

export interface QueryByCPFInterface {
    cpf: string,
}

export interface QueryByCNPJAndName {
    cnpj: string,
    nome: string
}

export interface QueryByID {
    id: string,
}

export interface QueryUser {
    login: string,
    senha: string
}