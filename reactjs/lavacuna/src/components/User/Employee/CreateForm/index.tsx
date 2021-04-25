import React, { useState } from 'react'
import { FaIndustry } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { EmployeeInterface } from '../../../../interfaces/user'

interface Props {
    submit: (user: EmployeeInterface) => void,
    goBack: () => void,
    employee?: EmployeeInterface
}

const EmployeeCreateForm = (props: Props) => {
    const [data, setData] = useState(props.employee?.dataContrato || '')
    const [salario, setSalario] = useState<string>(props.employee?.salario.toString() || '');
    const [senha, setSenha] = useState('');

    return (
        <div className="form-content">
            <section className="form-description">
                <FaIndustry size={150} className="icon"></FaIndustry>
                <h1>Dados do colaborador</h1>
                <p>
                    Para incluir um colaborador  necessitamos das seguintes informações
                </p>
                <button className="back-link" onClick={() => props.goBack()}>
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </button>
            </section>

            <form
                onSubmit={async (e) => {
                    e.preventDefault()

                    props.submit({
                        dataContrato: data,
                        salario: Number(salario!),
                        senha
                    })
                }}
            >
                <input type='date' value={data} required={true} onChange={(e) => {
                    if (new Date() < new Date(e.target.value)) {
                        return alert('Data deve ser anterior a hoje')
                    }
                    return setData(e.target.value)
                }} placeholder='Data' />

                <input
                    placeholder="salario"
                    value={salario}
                    type="number"
                    min='1000'
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSalario(event.target.value)
                    }
                ></input>

                <input
                    placeholder="senha"
                    value={senha}
                    type='password'
                    minLength={3}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setSenha(event.target.value)
                    }
                ></input>


                <button className="button" type="submit">
                    Salvar
            </button>
            </form>
        </div>
    )
}

export default EmployeeCreateForm