import { PersonInterface } from '../../Entities/person/interfaces';
import { Person } from '../entities/Person';

export default Object.assign(new Person(), {
    id: 'b485b977-92e8-4dc3-86dc-65c2333d7d0e',
    email: 'master@cefet.com',
    name: 'master',
    password: 'master123',
} as PersonInterface);
