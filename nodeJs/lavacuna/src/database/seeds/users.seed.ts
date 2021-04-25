import { Employee } from '../entities/Employee';
import { Person } from '../entities/Person';

export default Object.assign(new Person(), {
    employeeProfile: Object.assign(new Employee(), {
        dataContrato: '2020-01-01',
        salario: 11.77,
        senha: 'senha123',
    }),
    patientProfile: {
        peso: 60,
        altura: 1.73,
        tipoSanguineo: 'O+',
    },
    nome: 'Joao',
    email: 'joao11@cefet.com',
    telefone: '319999999',
    endereco: {
        cep: '31170220',
        logradouro: 'rua xxx',
        bairro: 'cidade nova',
        cidade: 'bh',
        estado: 'mg',
        numero: '333',
        complemento: '302',
    },
    codigoEndereco: 'b485b977-92e8-4dc3-86dc-65c2333d7d0e',
});
