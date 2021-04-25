export interface PersonInterface {
    id?: string;
    name: string;
    email: string;
    password?: string;
}

export type QueryUserInterface = Partial<Omit<PersonInterface, 'password'>>;

export type CreateUserInterface = Omit<PersonInterface, 'id'>;

export type UpdateUserInterface = Partial<CreateUserInterface>;

export type UserReturnColumns = 'name' | 'email' | 'id';
