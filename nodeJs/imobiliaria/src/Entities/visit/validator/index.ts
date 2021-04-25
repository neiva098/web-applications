import { body, param, query } from 'express-validator';

const dhValidator = body('dataHora')
    .isString()
    .matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0,3]0:00.000Z/)
    .custom(value => {
        if (new Date(value) < new Date()) throw new Error('Date of visit invalid');

        return true;
    });

export const createValidator = [dhValidator, body('propertieId').isUUID()];

export const deleteValidator = [param('id').isUUID()];

export const updateValidator = [param('id').isUUID(), dhValidator];

export const queryVisitsValidator = [
    query('id').isString().optional(),
    query('propertieId').isString().optional(),
    query('personId').isString().optional(),
];

const x = {
    branchId: '98f46506-15db-456e-8eef-f677e8687a56',
    rps: {
        identificacao: {
            serie: '001',
            numero: '0000000308',
            tipoRps: 'RPS',
            dataEmissao: '2021-04-05',
            competencia: '04/2021',
            regimeEspecialTributacao: 'TM',
            optanteSimplesNacional: '1',
            descricao: 'Isento ou não sujeito a ICMS',
        },
        tomador: {
            cnpj: '76735896000119',
            razaoSocial: 'Domestic BR Customer 1',
            inscricaoEstadual: '961818562498',
            endereco: {
                tipoLogradouro: 'Rua',
                logradouro: 'Guararapes',
                numero: '228',
                bairro: 'LAPA',
                codigoMunicipio: '3550308',
                nomeMunicipio: 'São Paulo',
                codigoPais: '1058',
                uf: 'SP',
                cep: '05077051',
                tpBairro: 'Bairro',
            },
            tipo: '3',
        },
        servico: {
            itemListaServico: '08.01',
            cnae: '8532500',
            codigoTributacaoMunicipio: '05690',
            discriminacao: 'MENSALIDADE - CURSOS LIVRES',
            codigoMunicipioIncidencia: '3550308',
            quantidade: 1,
            valorUnitario: 1000,
            codigoServico: '05690',
            valores: {
                totalServicos: 1000,
                totalDeducoes: 0,
                outrasRetencoes: 0,
                iss: {
                    baseCalculo: 1000,
                    aliquota: 2,
                    valor: 20,
                    valorRetido: 0,
                    retido: false,
                },
                pis: {
                    aliquota: 0.65,
                    valor: 6.5,
                },
                cofins: {
                    aliquota: 3,
                    valor: 30,
                },
                inss: {
                    aliquota: 0,
                    valor: 0,
                },
                ir: {
                    aliquota: 3,
                    valor: 30,
                },
                csll: {
                    aliquota: 1,
                    valor: 10,
                },
                valorLiquido: 923.5,
            },
        },
    },
};
