import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RouteComponentProps } from 'react-router-dom'

const PropertieDetailsHeader = (props: RouteComponentProps) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <button
                    className='icon'
                    onClick={() => { props.history.push('/propertie/list') }}
                >
                    <IoIosArrowBack size={18} color='#00AEED' />
                    <p>Retornar à listagem de empresas</p>
                </button>
            </div>

        </div>
    )
}

export default PropertieDetailsHeader