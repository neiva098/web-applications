import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressInterface } from '../../entities/address/interfaces';
import { Person } from './Person';

@Entity('adresses')
export class Address implements AddressInterface {
    @PrimaryGeneratedColumn('uuid')
    codigo: string;

    @OneToMany(() => Person, person => person.endereco, {
        onDelete: 'CASCADE',
    })
    moradores: Person[];

    @Column({ nullable: false, length: 8 })
    cep: string;

    @Column({ nullable: false })
    logradouro: string;

    @Column({ nullable: false })
    bairro: string;

    @Column({ nullable: false })
    cidade: string;

    @Column({ nullable: false })
    estado: string;

    @Column({ nullable: true })
    numero?: string;

    @Column({ nullable: true })
    complemento?: string;
}
