import { Column, Entity, Generated, JoinColumn, ManyToOne } from 'typeorm';
import { Person } from './Person';
import { Propertie } from './Propertie';

@Entity('visits')
export class Visit {
    @Generated('uuid')
    @Column()
    id: string;

    @ManyToOne(() => Propertie, propertie => propertie.id, {
        primary: true,
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'propertieId' })
    propertie?: Propertie;

    @Column('uuid', { primary: true })
    propertieId: string;

    @ManyToOne(() => Person, person => person.id, {
        primary: true,
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'personId' })
    person?: Person;

    @Column('uuid')
    personId: string;

    @Column({ nullable: false, primary: true })
    dataHora: Date;
}
