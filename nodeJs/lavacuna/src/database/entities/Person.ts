import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import { PersonInterface } from '../../entities/person/interfaces';
import { Address } from './Address';
import { Employee } from './Employee';
import { Patient } from './Patient';

@Entity('people')
export class Person implements PersonInterface {
    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @Column({ nullable: false })
    nome: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, length: 14 })
    telefone: string;

    @ManyToOne(() => Address, address => address.moradores, {
        cascade: true,
        nullable: false,
        eager: true,
    })
    @JoinColumn({ name: 'codigoEndereco' })
    endereco: Address;

    @Column()
    codigoEndereco: string;

    @OneToOne(() => Patient, patient => patient.pessoa, {
        cascade: true,
        onDelete: 'CASCADE',
        eager: true,
    })
    patientProfile?: Patient;

    @OneToOne(() => Employee, employee => employee.pessoa, {
        cascade: true,
        onDelete: 'CASCADE',
        eager: true,
    })
    employeeProfile?: Employee;
}
