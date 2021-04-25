import axios from 'axios'
import io from 'socket.io-client'

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export const getDevs = async (userName: string) => {
    return await api.post('/devs', {
        name: userName
    })
}

export const loadUsers = async (id: string) => {
    return await api.get('/devs', {
        headers: {
            user: id
        }
    })
}

export const getSocket = (id: string) => {
    return io('http://localhost:3333', {
        query: {
            user: id
        },
        transports: ['websocket']
    })
}

export const handleLike = async (id: string, matchId: string) => {
    return await api.post(`/devs/likes/${id}`, null, {
        headers: {
            user: matchId
        }
    })
}

export const handleDislike = async (id: string, matchId: string) => {
    return await api.post(`/devs/dislikes/${id}`, null, {
        headers: {
            user: matchId
        }
    })
}