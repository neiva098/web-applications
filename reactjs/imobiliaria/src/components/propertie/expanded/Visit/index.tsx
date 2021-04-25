import React, { useState } from 'react'
import { FaSave } from 'react-icons/fa'
import { PropertieInterface } from '../../../../interfaces/propertie'
import { createVisit } from '../../../../services/api'
import { errorHandler } from '../../../../utils/errors'
import VisitList from './List'

interface OwnProps {
    propertie: PropertieInterface
    history: string[]
}

const Visit = (props: OwnProps) => {
    const [hora, setHora] = useState('')
    const [data, setData] = useState('')

    async function saveVisit() {
        try {
            await createVisit(props.propertie.id!, `${data}T${hora}:00.000Z`)
        } catch (e) {
            errorHandler(e)
        }
    }

    return (
        <div className='visit-propertie-container'>
            <div className='visit-propertie-content'>
                <div className='visit-propertie-data'>
                    <div className='visit-propertie-field'>
                        <strong>Data:</strong>
                        <input type='date' value={data} onChange={(e) => setData(e.target.value)} placeholder='Data' />
                    </div>
                    <div className='visit-propertie-field'>
                        <strong>Horario:</strong>
                        <input type='time' value={hora} onChange={(e) => {
                            if (['00', '30'].includes(e.target.value.substr(3, 2))) setHora(e.target.value)
                        }} step='1800' />
                    </div>
                    <div className='visit-propertie-field'>
                        <strong>Visitas:</strong>
                        <VisitList
                            history={props.history}
                            propertie={props.propertie}
                        />
                    </div>
                </div>
            </div>
            <button className='visit-save' onClick={async () => {
                await saveVisit()

                props.history.push('/propertie/list')
            }}>
                <FaSave size={20} color='#00AEED'></FaSave>
                <p>Salvar</p>
            </button>
        </div>
    )
}

export default Visit