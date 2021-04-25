import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BeforeUpdate,
    BeforeInsert,
    OneToMany,
} from 'typeorm';
import { Propertie } from './Propertie';
import { Visit } from './Visit';

@Entity('persons')
export class Person {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @OneToMany(() => Propertie, propertie => propertie.owner, {
        onDelete: 'CASCADE',
    })
    propertiesOwn: Propertie[];

    @OneToMany(() => Visit, visit => visit.person, {
        onDelete: 'CASCADE',
    })
    visits: Visit[];

    public async compareHash(hash: unknown): Promise<boolean> {
        return bcrypt.compare(hash, this.password);
    }

    public generateToken(): string {
        return jwt.sign({ id: this.id }, 'secret', {
            expiresIn: 86400,
        });
    }

    private async hashPassword(): Promise<void> {
        if (this.password) this.password = await bcrypt.hash(this.password, 8);
    }

    @BeforeUpdate()
    @BeforeInsert()
    private async triggerBeforeSave(): Promise<void> {
        await this.hashPassword();
    }
}
