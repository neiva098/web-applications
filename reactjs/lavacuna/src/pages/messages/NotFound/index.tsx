import React from 'react'
import '../messages.css'
import { FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const NotFound = () => {
    return (
        <div className='warning-container'>
            <div>
                <h1>Sinto muito, esta página não existe.</h1>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#00AEED' />
                            Voltar ao portal
                        </Link>
            </div>
            <FaQuestionCircle size={500} color='#00AEED'></FaQuestionCircle>
        </div>
    )
}

export default NotFound