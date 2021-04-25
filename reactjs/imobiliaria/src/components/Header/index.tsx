import React from 'react'

import logo from '../../assets/logotipo.png'

import './style.css'

function Header(props: { Component: any, componentProps: any }) {
    return (
        <header className='custom-header'>
            <img src={logo} alt='logo'></img>
            <props.Component {...props.componentProps} />
        </header>
    )
}

export default Header