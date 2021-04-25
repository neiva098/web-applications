import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/r-api/?api=filmes'
})

export const loadMovies = async () => {
    const response = await api.get('/')

    return response.data
}

export const loadOneMovie = async (id: string) => {
    const response = await api.get(`/${id}`)

    return response.data
}