import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import HeaderList from '../../../components/Header/Lists'
import { GetAppointmentInterface } from '../../../interfaces/appointament'
import { getAppointaments } from '../../../services/api'
import { errorHandler } from '../../../utils/errors'

const ListAppointaments = (props: { history: string[] }) => {
    const [appointaments, setAppointaments] = useState<GetAppointmentInterface[]>([])

    useEffect(() => {
        async function loadAppointaments() {
            try {
                setAppointaments(await getAppointaments())
            } catch (e) {
                errorHandler(e)
            }
        }

        loadAppointaments()
    }, [])

    return (
        <div className='container'>
            <Header Component={HeaderList} componentProps={{ history: props.history }} />
            <div className='square-container'>

                <div className='search-title-container'>
                    <h1>Agendamentos Cadastrados:</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome do Paciente</th>
                            <th>Email do Paciente</th>
                            <th>Telefone do Paciente</th>
                            <th>Agendamento</th>
                            <th>Nome do Médico</th>
                            <th>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointaments.map(appointament => {
                                return (
                                    <tr key={appointament.codigo}>
                                        <th className='propertie-column'>{appointament.paciente.pessoa.nome}</th>
                                        <th className='propertie-column'>{appointament.paciente.pessoa.email}</th>
                                        <th className='propertie-column'>{appointament.paciente.pessoa.telefone}</th>
                                        <th className='propertie-column'>{`${new Date(appointament.dataHora).toLocaleDateString()} Horário: ${new Date(appointament.dataHora).toISOString().substr(11, 5)}`}</th>
                                        <th className='propertie-column'>{appointament.medico.employee.pessoa.nome}</th>
                                        <th className='propertie-column'>{appointament.medico.especialidade}</th>
                                    </tr >
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListAppointaments