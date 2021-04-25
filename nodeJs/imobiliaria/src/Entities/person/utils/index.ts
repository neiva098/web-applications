import { PersonInterface } from '../interfaces';

export const removeSecretProperties = (user: PersonInterface): PersonInterface => {
    const userCpy = { ...user };

    delete userCpy.id;
    delete userCpy.password;

    return userCpy;
};
