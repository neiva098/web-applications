import React, { useEffect, useState } from 'react'
import { FaMinusCircle } from 'react-icons/fa'
import { PropertieInterface } from '../../../../../interfaces/propertie'
import { VisitInterface } from '../../../../../interfaces/visit'
import { deleteVisit, getVisits } from '../../../../../services/api'
import { errorHandler } from '../../../../../utils/errors'
import { getUserLocalStorage } from '../../../../../utils/user'

const VisitList = (props: { propertie: PropertieInterface, history: string[] }) => {
    const [visits, setVisits] = useState<VisitInterface[]>([])

    useEffect(() => {
        async function loadVisits() {
            try {
                if (props.propertie?.id) setVisits(await getVisits(props.propertie.id))
            } catch (e) {
                errorHandler(e)
            }
        }

        loadVisits()
    })


    return (
        props.propertie.id ? <ul className='visit-list'>
            {
                visits.map((visit, index) => {
                    return (
                        <li className='visit-instance' key={index}>
                            <p>{new Date(visit.dataHora).toLocaleString()}</p>
                            {
                                getUserLocalStorage().id === visit.personId &&
                                <button type='button' onClick={async () => {
                                    try {
                                        await deleteVisit(visit.id!)
                                    } catch (e) {
                                        errorHandler(e)

                                        props.history.push('/propertie/list')
                                    }
                                }}>
                                    <FaMinusCircle size={17}> </FaMinusCircle>
                                </button>
                            }
                        </li>
                    )
                })
            }
        </ul> : <div></div>
    )
}

export default VisitList