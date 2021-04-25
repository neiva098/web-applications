import React from "react";

import { FaUsers, FaIndustry, FaBook, FaMap } from 'react-icons/fa'
import { ModuleComponent } from "../../interfaces/components/modules";

export const homeModules: ModuleComponent[] = [
    {
        icon: <FaUsers size={65} className='icon' > </FaUsers>,
        title: 'Pacientes',
        action: (props: { history: string[] }) => props.history.push('/user/patient/list')
    },
    {
        icon: <FaIndustry size={65} className='icon' > </FaIndustry>,
        title: 'Funcionários',
        action: (props: { history: string[] }) => props.history.push('/user/employee/list')
    },
    {
        icon: <FaBook size={65} className='icon' > </FaBook>,
        title: 'Agendamentos',
        action: (props: { history: string[] }) => props.history.push('/user/appointaments/list')
    },
    {
        icon: <FaMap size={65} className='icon' > </FaMap>,
        title: 'Endereços',
        action: (props: { history: string[] }) => props.history.push('/user/addresses/list')
    },
]
