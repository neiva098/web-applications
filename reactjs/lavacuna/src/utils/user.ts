import { AuthResponse, UserInterface } from "../interfaces/user"

export const setUserDataOnLocalStorage = (authRes: AuthResponse) => {
    const { token, ...user } = authRes
    if (token) localStorage.setItem('@lavacuna', token)

    localStorage.setItem('@lavacuna_user', JSON.stringify(user))

    return true
}

export const getUserLocalStorage = (): UserInterface | undefined => {
    const jsonStringUser = localStorage.getItem('@lavacuna_user')
    return jsonStringUser ? JSON.parse(jsonStringUser) : undefined
}
