import {
    Entity,
    PrimaryGeneratedColumn,
    OneToOne,
    Column,
    JoinColumn,
    ManyToOne,
    OneToMany,
    BeforeUpdate,
    getRepository,
    BeforeInsert,
} from 'typeorm';
import { HttpError } from '../../utils/errors/HttpError';
import { ColumnNumericTransformer } from '../transformers';
import { Address } from './Address';
import { Person } from './Person';
import { Visit } from './Visit';

@Entity('properties')
export class Propertie {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => Address, address => address.propertie, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    adress: Address;

    @ManyToOne(() => Person, person => person.id, {
        cascade: ['remove'],
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'ownerId' })
    owner: Person;

    @Column('uuid', { nullable: false })
    ownerId: string;

    @Column({ nullable: false })
    type: 'casa' | 'apartamento';

    @Column({ nullable: false, type: 'int' })
    roomsAmount: number;

    @Column({ nullable: false, type: 'int', default: 0 })
    suitesAmount: number;

    @Column({ nullable: false, type: 'int' })
    livingRoomsAmount: number;

    @Column({ nullable: false, type: 'int' })
    diningRoomsAmount: number;

    @Column({ nullable: false, type: 'int', default: 0 })
    parkingAmount: number;

    @Column({ nullable: false, type: 'int', default: 0 })
    builtInCabinetsAmount: number;

    @Column({ type: 'int', nullable: true })
    floor?: number;

    @Column('numeric', {
        transformer: new ColumnNumericTransformer(),
        nullable: true,
    })
    condominiumValue?: number;

    @Column('numeric', {
        transformer: new ColumnNumericTransformer(),
        nullable: false,
    })
    rentValue: number;

    @Column({ nullable: true })
    fullConcierge?: boolean;

    @Column({ nullable: true })
    description?: string;

    @OneToMany(() => Visit, visit => visit.propertie, { onDelete: 'CASCADE' })
    visits: Visit[];

    private removeApartamentProps() {
        delete this.fullConcierge;
        delete this.floor;
        delete this.condominiumValue;

        return this;
    }

    private static checkApartamentProps(updatedPropertie: Propertie) {
        if (
            updatedPropertie.type === 'apartamento' &&
            (!updatedPropertie.floor ||
                !updatedPropertie.condominiumValue ||
                updatedPropertie.fullConcierge === undefined)
        )
            throw new HttpError(400, 'undefined apartament props');
    }

    private async getDBPropertie() {
        const dbPropertie = await getRepository(Propertie).findOne({ id: this.id });

        return Object.assign(dbPropertie || {}, this);
    }

    @BeforeUpdate()
    @BeforeInsert()
    private triggerBeforeSave = async (): Promise<void> => {
        const updatedPropertie = await this.getDBPropertie();

        if (updatedPropertie.type === 'casa') this.removeApartamentProps();

        return Propertie.checkApartamentProps(updatedPropertie);
    };
}
