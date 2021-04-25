export interface UserInterface {
    id?: string;
    name: string;
    email: string;
    password?: string;
}

export interface AuthResponse {
    name: string;
    email: string;
    token: string
    id: string
}