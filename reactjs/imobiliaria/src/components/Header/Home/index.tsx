import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { clearSession } from '../../../services/auth'

const HeaderHomeProperties = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <button
                    className='icon'
                    onClick={() => {
                        clearSession()

                        props.history.push('/')
                    }}
                >
                    <IoIosArrowBack size={18} color='#00AEED' />
                    <p>Sair</p>
                </button>
            </div>
            <div className='group-header'>
                <Link
                    to='/propertie/list'
                    className='link-header'
                >
                    <p>Lista de imóveis</p>
                </Link>
            </div>

        </div>
    )
}

export default HeaderHomeProperties