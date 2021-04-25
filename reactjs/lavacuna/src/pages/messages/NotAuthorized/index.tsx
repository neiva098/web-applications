import React from 'react'
import { MdDoNotDisturbOn } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../messages.css'
import { FiArrowLeft } from 'react-icons/fi'

const NotAtuhtorized = () => {
    return (
        <div className='warning-container'>
            <div>
                <h1>Sinto muito, você não está autorizado a ver esta pagina.</h1>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#00AEED' />
                            Voltar ao portal
                        </Link>
            </div>
            <MdDoNotDisturbOn size={500} color='#00AEED'></MdDoNotDisturbOn>
        </div>
    )
}

export default NotAtuhtorized