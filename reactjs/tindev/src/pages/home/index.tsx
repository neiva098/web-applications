import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import logo from '../../assets/logo.svg'
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'
import itsamatch from '../../assets/itsamatch.png'
import * as api from '../../services/api';
import { User } from '../../interfaces/users'

export default function Main(props: any) {
    const {match} = props
    const [users, setUsers] = useState([])
    const [matchDev, setMatchDev]: [any | User, any] = useState(false)

    useEffect( () => {
        async function loadUsers() {
            const response = await api.loadUsers(match.params.id)
            setUsers(response.data)
        }

        loadUsers()
    }, [match.params.id])

    useEffect(() => {
        const socket = api.getSocket(match.params.id)

        socket.on('match', (dev: User) => {
            setMatchDev(dev)
        })
    }, [match.params.id])

    async function handleLike(id: string) {
        await api.handleLike(id, match.params.id)

        setUsers(users.filter((user: User) => user._id !== id))
    }

    async function handleDislike(id: string) {
        await api.handleDislike(id, match.params.id)
        setUsers(users.filter((user: User) => user._id !== id))
    }

    return (
        <div className="home-container">
            <Link to="/">
                <img src={logo} alt="Logo Tindev" />
            </Link>

            { users.length > 0 ? (
                <ul>
                    {users.map((user: User) => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>

                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
            <div className="empty">Sem devs no momento!</div>
            )}

            { matchDev && (
                <div className="match-container">
                    <img src={itsamatch} alt="" />

                    <img className="avatar" src={matchDev.avatar} alt="" />                    
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>

                    <button type="button" onClick={() => setMatchDev(false)}>Fechar</button>
                </div>

            )}
        </div>
    )
}