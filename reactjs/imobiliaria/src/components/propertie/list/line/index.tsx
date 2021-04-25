import React from 'react'
import { PropertieInterface } from '../../../../interfaces/propertie'
import { isOwner } from '../../../../utils/user'
import './style.css'

interface OwnProps {
    propertie: PropertieInterface
    history: string[]
}

function PropertieLineComponent(props: OwnProps) {
    return (
        <tr
            style={{ backgroundColor: isOwner(props.propertie) ? 'red' : undefined, color: isOwner(props.propertie) ? 'yellow' : undefined }}
            onClick={() => props.history.push(`/propertie/details/${props.propertie.id}`)}
        >
            <th className='propertie-column'>{props.propertie.type}</th>
            <th className='propertie-column'>{props.propertie.adress.bairro}</th>
            <th className='propertie-column'>{props.propertie.roomsAmount}</th>
            <th className='propertie-column'>{props.propertie.parkingAmount}</th>
            <th className='propertie-column'>{props.propertie.description || ''}</th>
            <th className='propertie-column'>{`R$${props.propertie.rentValue.toFixed(2)}`}</th>
        </tr >
    )
}

export default PropertieLineComponent