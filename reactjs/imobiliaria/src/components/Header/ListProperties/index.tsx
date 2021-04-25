import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const HeaderListProperties = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <button
                    className='icon'
                    onClick={() => {
                        props.history.push('/home')
                    }}
                >
                    <IoIosArrowBack size={18} color='#00AEED' />
                    <p>Home</p>
                </button>
            </div>
            <div className='group-header'>
                <Link
                    className='button'
                    to='/propertie/create'
                >
                    Cadastrar novo imóvel
                    </Link>
            </div>

        </div>
    )
}

export default HeaderListProperties