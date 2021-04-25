import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ColumnNumericTransformer } from '../transformers';
import { Person } from './Person';
import { EmployeeInterface } from '../../entities/person/employee/interfaces';
import { Medic } from './Medic';

@Entity('employees')
export class Employee implements EmployeeInterface {
    @OneToOne(() => Person, person => person.codigo, {
        primary: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'codigoPessoa' })
    pessoa: Person;

    @Column('uuid', { nullable: false, primary: true })
    codigoPessoa: string;

    @OneToOne(() => Medic, medic => medic.employee, {
        cascade: true,
        onDelete: 'CASCADE',
        eager: true,
    })
    medicProfile?: Medic;

    @Column({ nullable: false })
    dataContrato: Date;

    @Column('numeric', {
        transformer: new ColumnNumericTransformer(),
        nullable: false,
    })
    salario: number;

    @Column({ nullable: false })
    senha: string;

    public async compareHash(hash: unknown): Promise<boolean> {
        return bcrypt.compare(hash, this.senha);
    }

    public generateToken(): string {
        return jwt.sign({ codigo: this.codigoPessoa }, 'secret', {
            expiresIn: 86400,
        });
    }

    private async hashPassword(): Promise<void> {
        if (this.senha) this.senha = await bcrypt.hash(this.senha, 8);
    }

    @BeforeUpdate()
    @BeforeInsert()
    private async triggerBeforeSave(): Promise<void> {
        await this.hashPassword();
    }
}
