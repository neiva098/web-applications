import React from 'react'

import './style.css'

import { ModuleComponent } from '../../interfaces/components/modules'
import { FaBookMedical } from 'react-icons/fa'
import { getUserLocalStorage } from '../../utils/user'

export default function Modules(props: { modules: ModuleComponent[], history: any }) {
    return (
        <div className='modules-container'>
            <ul>
                {
                    props.modules.map((module, index) => {
                        return (
                            <li onClick={async () => await module.action(props)} key={index}>
                                {module.icon}
                                <p>{module.title}</p>
                            </li>
                        )
                    })
                }
                {
                    getUserLocalStorage()?.employeeProfile?.medicProfile &&
                    <li onClick={async () => props.history.push('/user/medic/appointaments/list')} key={props.modules.length}>
                        <FaBookMedical size={65} className='icon' > </FaBookMedical>
                        <p>Minhas Consultas</p>
                    </li>
                }

            </ul>
        </div>
    )
}

