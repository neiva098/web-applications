import React, { useEffect, useState } from 'react'
import Header from '../../../../components/Header'
import HeaderList from '../../../../components/Header/Lists'
import { UserInterface } from '../../../../interfaces/user'
import { getAllPatients } from '../../../../services/api'
import { errorHandler } from '../../../../utils/errors'

const ListPatients = (props: { history: string[] }) => {
    const [patients, setPatients] = useState<UserInterface[]>([])

    useEffect(() => {
        async function loadPatients() {
            try {
                setPatients(await getAllPatients())
            } catch (e) {
                errorHandler(e)
            }
        }

        loadPatients()
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
                            <th>Peso</th>
                            <th>Altura</th>
                            <th>Tipo Sanguineo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map(patient => {
                                return (
                                    <tr key={patient.codigo}>
                                        <th className='propertie-column'>{patient.nome}</th>
                                        <th className='propertie-column'>{patient.email}</th>
                                        <th className='propertie-column'>{patient.telefone}</th>
                                        <th className='propertie-column'>{`${Number(patient.patientProfile?.peso).toFixed(2)} KG`}</th>
                                        <th className='propertie-column'>{`${Number(patient.patientProfile?.altura).toFixed(2)} m`}</th>
                                        <th className='propertie-column'>{patient.patientProfile?.tipoSanguineo}</th>
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

export default ListPatients