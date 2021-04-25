import React from 'react'
import { Link } from 'react-router-dom'

const HeaderHomeProperties = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <Link
                    className='button'
                    to='/address/create'
                >
                    Criar endereço
                </Link>
                <Link
                    className='button'
                    to='/apointtament/create'
                >
                    Agendar Visita
                </Link>
            </div>
            <div className='group-header'>
                <Link
                    className='button'
                    to='/user/login'
                >
                    Sou funcionário
                </Link>
            </div>
        </div >
    )
}

export default HeaderHomeProperties