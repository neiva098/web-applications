/*

CREATE TABLE SQL

create table cliente (
    cpf varchar(11) primary key not null,
    nome varchar(36),
    e_mail varchar(36),
    endereco varchar(36),
    telefone varchar(9)
);
*/
export interface ClienteInterface {
    nome: string,
    e_mail: string,
    cpf: string,
    endereco: string,
    telefone: string,
}

/*

CREATE TABLE SQL

create table cargo (
    id varchar(36) primary key not null,
    nome_cargo varchar(36) not null
);
*/
export interface CargoInterface {
    id?: string,
    nome_cargo: string,
}

/*

CREATE TABLE SQL

create table funcionario (
    cpf varchar(11) primary key not null,
    nome varchar(36),
    e_mail varchar(36),
    salario float8,
    fk_cargo varchar(36) REFERENCES cargo(id)
);
*/

export interface FuncionarioInterface {
    nome: string,
    e_mail: string,
    cpf: string,
    salario: number,
    fk_cargo: string,
}

/*

CREATE TABLE SQL

create table usuario (
    login varchar(36) primary key not null,
    senha varchar(36),
    nome varchar(36),
    fk_funcionario varchar(11) REFERENCES funcionario(cpf),
);
*/

export interface UsuarioInterface {
    login: string,
    senha: string,
    nome: string,
    fk_funcionario: string,
}
/*

CREATE TABLE SQL


/*

CREATE TABLE SQL

create table funcionalidade (
    id varchar(36) primary key not null,
    descricao varchar(36) not null
);
*/
export interface FuncionalidadeInterface {
    id?: string,
    descricao: string,
}

/*

CREATE TABLE SQL

create table perfil (
    fk_cargo varchar(36) REFERENCES cargo(id),
    fk_funcionalidade varchar(36) REFERENCES funcionalidade(id)
);
*/
export interface PerfilInterface {
    fk_cargo: string,
    fk_funcionalidae: string,
}
/*

create table crediario (
    id varchar(36) primary key not null,
    dt_liberacao date,
    dt_expiracao date,
    limite float8,
    uso float8,
    ativo boolean,
    fk_usuario varchar(36) REFERENCES usuario(login),
    fk_cliente varchar(11) REFERENCES cliente(cpf)
);
*/
export interface CrediarioInterface {
    dt_liberacao: Date,
    dt_expiracao: Date,
    limite: number,
    uso: number,
    ativo: boolean,
    fk_usuario: string,
    fk_cliente: string,

    id?: string,
}

/*

CREATE TABLE SQL

create table compra (
    id varchar(36) primary key not null,
    dt_pedido date,
    meiopagamento varchar(36),
    pago boolean,
    fk_cliente varchar(11) REFERENCES cliente(cpf)
);
*/
export interface CompraInterface {
    valor: number,
    pago: boolean,
    meiopagamento: string,
    dt_pedido: Date,

    fk_cliente: string,
    id?: string,
}

/*

CREATE TABLE SQL

create table forncedor (
    cnpj varchar(15) primary key not null,
    nome varchar(36)
);
*/
export interface FornecedorInterface {
    nome: string,

    cnpj: string,
}

/*

CREATE TABLE SQL

create table produto (
    id varchar(36) primary key not null,
    descricao varchar(36),
    precounitario float8,
    precovenda float8,
    qt_estoque integer,
    fk_funcionario varchar(11) REFERENCES funcionario(cpf),
    fk_fornecedor varchar(15) REFERENCES fornecedor(cnpj)
);
*/

export interface ProdutoInterface {
    descricao: string,
    precounitario: number,
    precovenda: number,
    qt_estoque: number,

    fk_fornecedor: string,
    id?: string,
}

/*

CREATE TABLE SQL

create table mercadoria (
    id varchar(36) primary key not null,
    quantidade integer,
    precovenda float8,
    fk_compra varchar(36) REFERENCES compra(id),
    fk_produto varchar(36) REFERENCES produto(id),
);
*/
export interface MercadoriaInterface {
    quantidade: number,
    precovenda: number,
    fk_compra: string,
    fk_produto: string,

    id?: string,
}




/*

CREATE TABLE SQL

create table nfentrada (
    id varchar(36) primary key not null,
    nome varchar(36),
    dt_entrada date,
    dt_nf date
);
*/
export interface NFEntradaInterface {
    dt_entrada: Date,
    dt_nf: Date,
    nome: string,

    id?: string,
}

/*

CREATE TABLE SQL

create table nfentradaitem (
    id varchar(36) primary key not null,
    parcelacompras integer,
    quantidade integer,
    fk_produto varchar(36) REFERENCES produto(id),
    fk_nfentrada varchar(36) REFERENCES nfentrada(id)
);
*/
export interface NFEntradaItemInterface {
    quantidade: number,
    parcelacompras: number,
    fk_produto: string,
    fk_nfentrada: string,

    id?: string,
}

/*

CREATE TABLE SQL

create table estoque (
    id varchar(36) primary key not null,
    status varchar(36),
    fk_nfentradaitem varchar(36) REFERENCES nfentradaitem(id)
);
*/
export interface EstoqueInterface {
    status: string,

    fk_nfentradaitem: string,
    id?: string,
}



