import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { CreateUserInterface } from '../../../interfaces/user'

interface Props {
    submit: (user: CreateUserInterface) => void,
    goBack: () => void,
    user?: CreateUserInterface
}

const UserCreateForm = (props: Props) => {
    const [nome, setNome] = useState(props.user?.nome || '');
    const [email, setEmail] = useState(props.user?.email || '');
    const [telefone, setTelefone] = useState(props.user?.telefone || '');

    return (
        <div className="form-content">
            <section className="form-description">
                <FaUser size={150} className="icon"></FaUser>
                <h1>Dados Pessoais</h1>
                <p>
                    Para incluir um colaborador ou paciente necessitamos das seguintes informações
                </p>
                <button className="back-link" onClick={() => props.goBack()}>
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </button>
            </section>

            <form
                onSubmit={async (e) => {
                    e.preventDefault()

                    props.submit({ nome, email, telefone })
                }}
            >
                <input
                    placeholder="email"
                    value={email}
                    type='email'
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                    }
                ></input>

                <input
                    placeholder="nome"
                    value={nome}
                    required={true}
                    minLength={3}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNome(event.target.value)
                    }
                ></input>

                <input
                    placeholder="telefone"
                    value={telefone}
                    type="number"
                    minLength={10}
                    maxLength={14}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setTelefone(event.target.value)
                    }
                ></input>


                <button className="button" type="submit">
                    Salvar
                </button>
            </form>
        </div>
    )
}

export default UserCreateForm