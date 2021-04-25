import React, { useEffect, useState } from 'react'
import { FaBook } from 'react-icons/fa'
import { FiArrowLeft } from 'react-icons/fi'
import { CreateAppointmentInterface } from '../../../interfaces/appointament'
import { UserInterface } from '../../../interfaces/user'
import { getAvaliableAppointaments, getAvaliableEspecialidades, getAvaliablePatient, getMedicsByEspecialidade } from '../../../services/api'
import { errorHandler } from '../../../utils/errors'

interface Props {
    submit: (appointamment: CreateAppointmentInterface) => Promise<void>,
    goBack: () => void,
}

const AppoitamentCreateForm = (props: Props) => {
    const [selectedEspecialidade, setSelectedEspecialidade] = useState<string | undefined>()
    const [especialidades, setEspecialidades] = useState<string[]>([])

    const [selectedMedic, setSelectedMedic] = useState<string | undefined>()
    const [medics, setMedics] = useState<UserInterface[]>([])

    const [selectedPatient, setSelectedPatient] = useState<string | undefined>()
    const [patients, setPatients] = useState<UserInterface[]>([])

    const [hora, setHora] = useState('')
    const [data, setData] = useState('')

    const [disponivelDh, setDisponivelDh] = useState<{ data: string, horarios: string[] }[]>([])

    useEffect(() => {
        async function findEspecialidades() {
            try {
                setEspecialidades(await getAvaliableEspecialidades())
            } catch (e) {
                errorHandler(e)
            }
        }

        findEspecialidades()
    }, [])

    useEffect(() => {
        async function findMedics() {
            try {
                setMedics(await getMedicsByEspecialidade(selectedEspecialidade!))
            } catch (e) {
                errorHandler(e)
            }
        }

        findMedics()

    }, [selectedEspecialidade])

    useEffect(() => {
        async function findAvaliableAppointaments() {
            try {
                setPatients(await getAvaliablePatient(selectedMedic!))
                setDisponivelDh(await getAvaliableAppointaments(selectedMedic!))
            } catch (e) {
                errorHandler(e)
            }
        }

        if (selectedMedic) findAvaliableAppointaments()
    }, [selectedMedic])

    return (
        <div className="form-content">
            <section className="form-description">
                <FaBook size={150} className="icon"></FaBook>
                <h1>Dados de Agendamento</h1>
                <p>
                    Para incluir um agendamento necessitamos das seguintes informações
                </p>
                <button className="back-link" onClick={() => props.goBack()}>
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar
                </button>
            </section>

            <form
                onSubmit={async (e) => {
                    e.preventDefault()

                    await props.submit({
                        codigoMedico: selectedMedic!,
                        dataHora: `${data}T${hora}:00.000Z`,
                        codigoPaciente: selectedPatient!
                    })
                }}
            >

                <label className='form-label'>Especialidade:</label>

                <div className='select-container'>
                    <select value={selectedEspecialidade} onChange={(e) => setSelectedEspecialidade(e.target.value)}>
                        <option hidden>Especialidade</option>
                        {
                            especialidades.map((especialidade, index) => {
                                return (
                                    <option key={index} value={especialidade}>{especialidade}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <label className='form-label'>Medico:</label>
                <div className='select-container'>
                    <select value={selectedMedic} onChange={(e) => setSelectedMedic(e.target.value)}>
                        <option hidden>Medico</option>
                        {
                            medics.map(medic => {
                                return (
                                    <option key={medic.codigo} value={medic.codigo}>{`${medic.nome} CRM: ${medic.employeeProfile?.medicProfile?.crm}`}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <label className='form-label'>Data:</label>
                <input type='date' value={data} required={true} min={new Date().toDateString()} onChange={
                    (e) => {
                        if (disponivelDh.map(dh => dh.data).includes(e.target.value)) setData(e.target.value)
                    }
                } placeholder='Data' />

                <label className='form-label'>Horario:</label>
                <div className='select-container'>
                    <select value={hora} onChange={(e) => setHora(e.target.value)}>
                        <option hidden>Hora</option>
                        {
                            disponivelDh.find(dh => dh.data === data)?.horarios.map((hr, index) => {
                                return (
                                    <option key={hr} value={hr}>{hr}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <label className='form-label'>Paciente:</label>
                <div className='select-container'>
                    <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)}>
                        <option hidden>Paciente</option>
                        {
                            patients.map(patient => {
                                return (
                                    <option key={patient.codigo} value={patient.codigo}>{`${patient.nome} Email: ${patient.email}`}</option>
                                )
                            })
                        }
                    </select>
                </div>

                <button className="button" type="submit">
                    Salvar
                </button>
            </form>
        </div >
    )
}

export default AppoitamentCreateForm