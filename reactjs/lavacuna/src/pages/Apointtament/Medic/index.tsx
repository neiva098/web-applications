import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header'
import HeaderList from '../../../components/Header/Lists'
import { GetAppointmentInterface } from '../../../interfaces/appointament'
import { getAppointamentsByMedic } from '../../../services/api'
import { errorHandler } from '../../../utils/errors'
import { getUserLocalStorage } from '../../../utils/user'

const ListAppointamentsMedic = (props: { history: string[] }) => {
    const [appointaments, setAppointaments] = useState<GetAppointmentInterface[]>([])

    useEffect(() => {
        async function loadAppointaments() {
            try {
                setAppointaments(await getAppointamentsByMedic(getUserLocalStorage()?.codigo!))
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
                    <h1>Pacientes Cadastrados:</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Altura</th>
                            <th>Peso</th>
                            <th>Sangue</th>
                            <th>Agendamento</th>
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
                                        <th className='propertie-column'>{`${Number(appointament.paciente.altura).toFixed(2)} KG`}</th>
                                        <th className='propertie-column'>{`${Number(appointament.paciente.peso).toFixed(2)} m`}</th>
                                        <th className='propertie-column'>{appointament.paciente.tipoSanguineo}</th>
                                        <th className='propertie-column'>{`${new Date(appointament.dataHora).toLocaleDateString()} Horário: ${new Date(appointament.dataHora).toLocaleTimeString().substr(0, 5)}`}</th>

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

export default ListAppointamentsMedic