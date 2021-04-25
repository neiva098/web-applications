import model from '../models/dev'
import { User } from '../interfaces/users'
import { HttpError } from '../utils/errors'
import axios from 'axios'

export const index = async (id: string) => {
    const loggedDev = await model.findById(id)

    const users = await model.find({
        $and: [
            { _id: { $ne: id } },
            { _id: { $nin: loggedDev.likes } },
            { _id: { $nin: loggedDev.dislikes } }
        ]
    }).sort({ _id: -1 })

    return users
}

export const store = async (user: User) => {
    const userExists = await model.findOne({ user: user.name })

    if (userExists) return userExists

    const githubResponse = await axios.get(`https://api.github.com/users/${user.name}`)

    const { name, bio, avatar_url: avatar } = githubResponse.data

    const dev = await model.create({
        name,
        user: user.name,
        bio,
        avatar
    })

    return dev
}

export const like = async (user: string, dev: string, connectedUsers: any, io: any) => {
    const loggedDev = await model.findById(user)
    const targetDev = await model.findById(dev)

    if (!targetDev) throw new HttpError(400, 'Dev not found')

    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    if (targetDev.likes.includes(loggedDev._id)) {
        const loggedSocket = connectedUsers[user]
        const targetSocket = connectedUsers[dev]

        if (loggedSocket) {
            io.to(loggedSocket).emit('match', targetDev)
        }

        if (targetSocket) {
            io.to(targetSocket).emit('match', loggedDev)
        }
    }

    return loggedDev
}

export const dislike = async (user: string, dev: string) => {
    const loggedDev = await model.findById(user)
        const targetDev = await model.findById(dev)

        if (!targetDev) throw new HttpError(400, 'Dev not found')

        loggedDev.dislikes.push(targetDev._id)

        await loggedDev.save()

        return loggedDev
}