import React from 'react'
import { FaEdit, FaUserCheck, FaInfoCircle } from 'react-icons/fa'
import { PropertieInterface } from '../../../../interfaces/propertie'
import { getUserLocalStorage } from '../../../../utils/user'

const ExpandedPropertieMenu = (props: { setService: React.Dispatch<React.SetStateAction<'edit' | 'details' | 'visit'>>, service: 'edit' | 'details' | 'visit', propertie: PropertieInterface }) => {
    function getStyle(service: string) {
        return props.service === service ? { backgroundColor: 'white', color: '#026A99' } : undefined
    }

    return (
        <div className='details-menu'>
            <button className='detail-menu-button' style={getStyle('details')} onClick={() => props.setService('details')}>
                <FaInfoCircle className='detail-menu-button-icon' size={16} />
                Informações gerais
            </button>
            {
                getUserLocalStorage().id === props.propertie?.owner.id ?
                    <button className='detail-menu-button' style={getStyle('edit')} onClick={() => props.setService('edit')}>
                        <FaEdit className='detail-menu-button-icon' size={16} />
                        Editar dados
                    </button> :
                    <button className='detail-menu-button' style={getStyle('visit')} onClick={() => props.setService('visit')}>
                        <FaUserCheck className='detail-menu-button-icon' size={16} />
                        Marcar Visita
                    </button>
            }
        </div>
    )
}

export default ExpandedPropertieMenu