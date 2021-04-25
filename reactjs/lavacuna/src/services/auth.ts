import { api } from "./api"

export const isUserAutheticated = (): boolean => {
    const token = localStorage.getItem('@lavacuna')

    if (token) return true

    return token ? true : false
}


export const clearSession = () => {
    api.defaults.headers.authorization = 'invalid'

    localStorage.clear()
}
