import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { MedicInterface } from '../../entities/person/employee/medic/interfaces';
import { Appointament } from './Appointment';
import { Employee } from './Employee';

@Entity('medics')
export class Medic implements MedicInterface {
    @OneToOne(() => Employee, employee => employee.codigoPessoa, {
        primary: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'codigoColaborador' })
    employee: Employee;

    @Column('uuid', { nullable: false, primary: true })
    codigoColaborador: string;

    @OneToMany(() => Appointament, appointament => appointament.medico, {
        onDelete: 'CASCADE',
    })
    appointaments: Appointament[];

    @Column({ nullable: false })
    crm: string;

    @Column({ nullable: false })
    especialidade: string;
}
