import React, { useEffect, useState } from 'react'
import Header from '../../../../components/Header'
import HeaderList from '../../../../components/Header/Lists'
import { UserInterface } from '../../../../interfaces/user'
import { getAllEmployees } from '../../../../services/api'
import { errorHandler } from '../../../../utils/errors'

const ListEmployees = (props: { history: string[] }) => {
    const [patients, setEmployees] = useState<UserInterface[]>([])

    useEffect(() => {
        async function loadEmployees() {
            try {
                setEmployees(await getAllEmployees())
            } catch (e) {
                errorHandler(e)
            }
        }

        loadEmployees()
    }, [])

    return (
        <div className='container'>
            <Header Component={HeaderList} componentProps={{ history: props.history }} />
            <div className='square-container'>

                <div className='search-title-container'>
                    <h1>Funcionários Cadastrados:</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Salário</th>
                            <th>Contrato</th>
                            <th>Especialidade</th>
                            <th>crm</th>
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
                                        <th className='propertie-column'>{`R$${Number(patient.employeeProfile?.salario).toFixed(2)}`}</th>
                                        <th className='propertie-column'>{new Date(patient.employeeProfile?.dataContrato!).toLocaleDateString()}</th>
                                        <th className='propertie-column'>{patient.employeeProfile?.medicProfile?.especialidade}</th>
                                        <th className='propertie-column'>{patient.employeeProfile?.medicProfile?.crm}</th>
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

export default ListEmployees