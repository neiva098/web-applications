import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { clearSession } from '../../../../services/auth'

const HeaderUserHomeProperties = (props: { history: string[] }) => {
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
                    className='button'
                    to='/user/create'
                >
                    Criar usuário
                </Link>
            </div>
        </div>
    )
}

export default HeaderUserHomeProperties