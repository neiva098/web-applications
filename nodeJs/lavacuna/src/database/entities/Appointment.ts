import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { AppointmentInterface } from '../../entities/appointament/interfaces';
import { Medic } from './Medic';
import { Patient } from './Patient';

@Entity('appointaments')
export class Appointament implements AppointmentInterface {
    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @ManyToOne(() => Medic, medic => medic.appointaments, {
        nullable: false,
        eager: true,
    })
    @JoinColumn({ name: 'codigoMedico' })
    medico: Medic;

    @Column({ nullable: false })
    codigoMedico: string;

    @ManyToOne(() => Patient, paciente => paciente.appointaments, {
        nullable: false,
        eager: true,
    })
    @JoinColumn({ name: 'codigoPaciente' })
    paciente: Patient;

    @Column({ nullable: false })
    codigoPaciente: string;

    @Column({ nullable: false })
    dataHora: Date;
}
