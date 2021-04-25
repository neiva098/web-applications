import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Propertie } from './Propertie';

@Entity('adresses')
export class Address {
    @OneToOne(() => Propertie, propertie => propertie.adress, {
        primary: true,
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'propertieId' })
    propertie: Propertie;

    @Column('uuid', { primary: true })
    propertieId: string;

    @Column({ nullable: false })
    logradouro: string;

    @Column({ nullable: false })
    bairro: string;

    @Column({ nullable: false })
    numero: string;

    @Column({ nullable: false })
    cep: string;

    @Column({ nullable: false })
    uf: string;

    @Column({ nullable: true })
    complemento?: string;
}
