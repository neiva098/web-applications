import React, { useState } from 'react'
import { FaLaptopMedical } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { MedicInterface } from '../../../../../interfaces/user'

interface Props {
    submit: (user: MedicInterface) => void,
    goBack: () => void,
    medic?: MedicInterface
}

const MedicCreateForm = (props: Props) => {
    const [crm, setCrm] = useState(props.medic?.crm || "");
    const [especialidade, setEspecialidade] = useState(props.medic?.especialidade || "");

    return (
        <div className="form-content">
            <section className="form-description">
                <FaLaptopMedical size={150} className="icon"></FaLaptopMedical>
                <h1>Dados do médico</h1>
                <p>
                    Para incluir um médico  necessitamos das seguintes informações
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
                        crm,
                        especialidade
                    })
                }}
            >
                <input
                    placeholder="crm"
                    value={crm}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setCrm(event.target.value)
                    }
                ></input>

                <input
                    placeholder="especialidade"
                    value={especialidade}
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEspecialidade(event.target.value)
                    }
                ></input>

                <button className="button" type="submit">
                    Salvar
            </button>
            </form>
        </div>
    )
}

export default MedicCreateForm