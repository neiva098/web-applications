create table cliente (
    cpf varchar(11) primary key not null,
    nome varchar(36),
    e_mail varchar(36),
    endereco varchar(36),
    telefone varchar(9)
);

create table cargo (
    id varchar(36) primary key not null,
    nome_cargo varchar(36) not null
);

create table funcionario (
    cpf varchar(11) primary key not null,
    nome varchar(36),
    e_mail varchar(36),
    salario float8,
    fk_cargo varchar(36) REFERENCES cargo(id)
);

create table usuario (
    login varchar(36) primary key not null,
    senha varchar(36),
    nome varchar(36),
    fk_funcionario varchar(11) REFERENCES funcionario(cpf)
);

create table funcionalidade (
    id varchar(36) primary key not null,
    descricao varchar(36) not null
);

create table perfil (
    fk_cargo varchar(36) REFERENCES cargo(id),
    fk_funcionalidade varchar(36) REFERENCES funcionalidade(id)
);


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

create table compra (
    id varchar(36) primary key not null,
    dt_pedido date,
    meiopagamento varchar(36),
    pago boolean,
    fk_cliente varchar(11) REFERENCES cliente(cpf)
);

create table fornecedor (
    cnpj varchar(15) primary key not null,
    nome varchar(36)
);

create table produto (
    id varchar(36) primary key not null,
    descricao varchar(36),
    precounitario float8,
    precovenda float8,
    qt_estoque integer,
    fk_funcionario varchar(11) REFERENCES funcionario(cpf),
    fk_fornecedor varchar(15) REFERENCES fornecedor(cnpj)
);

create table mercadoria (
    id varchar(36) primary key not null,
    quantidade integer,
    precovenda float8,
    fk_compra varchar(36) REFERENCES compra(id),
    fk_produto varchar(36) REFERENCES produto(id)
);

create table nfentrada (
    id varchar(36) primary key not null,
    nome varchar(36),
    dt_entrada date,
    dt_nf date
);

create table nfentradaitem (
    id varchar(36) primary key not null,
    parcelacompras integer,
    quantidade integer,
    fk_produto varchar(36) REFERENCES produto(id),
    fk_nfentrada varchar(36) REFERENCES nfentrada(id)
);

create table estoque (
    id varchar(36) primary key not null,
    status varchar(36),
    fk_nfentradaitem varchar(36) REFERENCES nfentradaitem(id)
);