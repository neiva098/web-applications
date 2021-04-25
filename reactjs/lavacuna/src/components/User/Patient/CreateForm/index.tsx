import React, { useState } from 'react'
import { FaHospital } from 'react-icons/fa';
import { FiArrowLeft } from 'react-icons/fi';
import { PatientInterface } from '../../../../interfaces/user'

interface Props {
    submit: (user: PatientInterface) => void,
    goBack: () => void,
    patient?: PatientInterface
}

const PatientCreateForm = (props: Props) => {
    const [peso, setPeso] = useState<string>(props.patient?.peso.toString() || '');
    const [altura, setAltura] = useState<string>(props.patient?.altura.toString() || '');
    const [tipoSanguineo, setTipoSanguineo] = useState(props.patient?.tipoSanguineo || "");

    return (
        <div className="form-content">
            <section className="form-description">
                <FaHospital size={150} className="icon"></FaHospital>
                <h1>Dados do paciente</h1>
                <p>
                    Para incluir um paciente necessitamos das seguintes informações
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
                        peso: Number(peso!),
                        altura: Number(altura!),
                        tipoSanguineo
                    })
                }}
            >

                <input
                    placeholder="altura"
                    value={altura}
                    type="number"
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAltura(event.target.value)
                    }
                ></input>

                <input
                    placeholder="peso"
                    value={peso}
                    type="number"
                    step='1'
                    required={true}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setPeso(event.target.value)
                    }
                ></input>

                <input
                    placeholder="tipo sanguineo"
                    value={tipoSanguineo}
                    minLength={2}
                    maxLength={2}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setTipoSanguineo(event.target.value)
                    }
                ></input>


                <button className="button" type="submit">
                    Salvar
            </button>
            </form>
        </div>

    )
}

export default PatientCreateForm