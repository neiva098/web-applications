import React, { useState, FormEvent } from 'react'
import './style.css'

import {getDevs} from '../../services/api'

import logo from '../../assets/logo.svg'

export default function Login(props: {history: string[]}) {
    const {history} = props
    const [name, setUserName] = useState('')

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const response = await getDevs(name)

        const { _id } = response.data

        history.push(`/dev/${_id}`)
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev Logo"/>
                <input
                    placeholder="Digite seu usuário no Github"
                    value={name}
                    onChange={ event => setUserName(event.target.value) }
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

