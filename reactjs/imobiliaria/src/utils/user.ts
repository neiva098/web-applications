import { PropertieInterface } from "../interfaces/propertie"
import { AuthResponse, UserInterface } from "../interfaces/user"

export const setUserDataOnLocalStorage = (user: AuthResponse) => {
    if (user.token) localStorage.setItem('@yahooRespostas', user.token)

    localStorage.setItem('@userData', JSON.stringify({
        email: user.email,
        name: user.name,
        id: user.id,
    }))

    return true
}

export const getUserLocalStorage = (): UserInterface => {
    return JSON.parse(localStorage.getItem('@userData')!)
}

export const isOwner = (propertie: PropertieInterface) => {
    return getUserLocalStorage().id === propertie.ownerId
}