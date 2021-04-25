import axios from 'axios'
import io from 'socket.io-client'

const api = axios.create({
    baseURL: 'http://192.168.0.19:3333'
})

export const logIn = async (user: string) => {
    return await api.post('/devs', {
        name: user
    })
}

export const loadUsers = async (id: string) => {
    return await api.get('/devs', {
        headers: {
            user: id
        }
    })
}

export const like = async (id: string, matchId: string) => {
    return await api.post(`/devs/likes/${id}`, null, {
        headers: {
            user: matchId
        }
    })
}

export const dislike = async (id: string, matchId: string) => {
    return await api.post(`/devs/dislikes/${id}`, null, {
        headers: {
            user: matchId
        }
    })
}

export const  getSocket = (id: string) => io('http://192.168.0.19:3333', {
    query: {
        user: id
    },
    transports: ['websocket']
})