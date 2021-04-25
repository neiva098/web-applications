import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { PatientInterface } from '../../entities/person/patient/interfaces';
import { ColumnNumericTransformer } from '../transformers';
import { Appointament } from './Appointment';
import { Person } from './Person';

@Entity('patients')
export class Patient implements PatientInterface {
    @OneToOne(() => Person, person => person.codigo, {
        primary: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'codigoPessoa' })
    pessoa: Person;

    @Column('uuid', { nullable: false, primary: true })
    codigoPessoa: string;

    @OneToMany(() => Appointament, appointament => appointament.paciente, {
        onDelete: 'CASCADE',
    })
    appointaments: Appointament[];

    @Column('numeric', {
        transformer: new ColumnNumericTransformer(),
        nullable: false,
    })
    peso: number;

    @Column('numeric', {
        transformer: new ColumnNumericTransformer(),
        nullable: false,
    })
    altura: number;

    @Column({ nullable: false, length: 2 })
    tipoSanguineo: string;
}
