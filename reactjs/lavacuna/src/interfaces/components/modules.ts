import {MdAccountBalance, MdLibraryBooks } from 'react-icons/md'
import {FaUserAstronaut, FaUserAlt, FaTable} from 'react-icons/fa'
import {TiCalendar} from 'react-icons/ti'
import {GiTestTubes} from 'react-icons/gi'

import React from 'react'

export interface ModuleComponent {
    icon: JSX.Element
    title: string
    action: Function
}