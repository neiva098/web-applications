import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const HeaderList = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <button
                    className='icon'
                    onClick={() => {

                        props.history.push('/user/home')
                    }}
                >
                    <IoIosArrowBack size={18} color='#00AEED' />
                    <p>Voltar</p>
                </button>
            </div>
        </div >
    )
}

export default HeaderList