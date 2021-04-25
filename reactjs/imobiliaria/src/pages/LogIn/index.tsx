import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logIn } from '../../services/api'
import './style.css'
import logo from '../../assets/logotipo.png'
import { errorHandler } from '../../utils/errors'
import { AiFillLock } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'

export default function LogIn(props: { history: string[] }) {
    const { history } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const inputs = document.getElementsByTagName('input')

        for (const input of inputs) {
            input.addEventListener('focus', function (event) {
                this.parentElement!.style.border = 'rgb(150, 150, 223) 1px solid'
            })

            input.addEventListener("blur", function (event) {
                this.parentElement!.style.border = "none";
            })
        }
    })

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            await logIn(email, password)

            history.push('/home')
        } catch (e) {
            errorHandler(e)
        }
    }

    return (
        <div className="login-container" id='loginContainer'>
            <div className='form-login'>
                <img src={logo} alt='developer' className='icon'></img>
                <form onSubmit={handleSubmit}>
                    <h1>Olá, bem-vindo!</h1>
                    <h3>Entre com a sua conta para ter acesso ao  <br></br> painel da Imobiliaria.</h3>
                    <div className="input-container">
                        <div className="input-box">
                            <FaUserAlt size={15} color='#00aeed' />
                            <input
                                placeholder="E-mail"
                                value={email}
                                type='email'
                                required={true}
                                minLength={3}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className='input-box'>
                            <AiFillLock size={17} color='#00aeed' />
                            <input
                                placeholder="Senha"
                                value={password}
                                required={true}
                                type='password'
                                minLength={3}
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className='button'>Entrar</button>
                    </div>

                    <div className='links-container' >
                        <Link to='/forgotPassword' className='back-link'>
                            Esqueceu a senha?
                    </Link>

                        <Link to='/cadastro' className='back-link'>
                            Não tem uma conta? Crie uma!
                    </Link>
                    </div>

                </form>

            </div>


        </div >
    )
}

