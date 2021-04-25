import React from 'react'

export const ConhecaOTime = (props) => {
    const funcionariosComponent = []
    props.time.forEach((elemento, index) => {
        funcionariosComponent.push(<div key={index}>
            <Sobre nome={elemento.nome} idade= {elemento.idade} ></Sobre>
            <Social facebook={elemento?.redesSociais?.facebook} linkedin= {elemento?.redesSociais?.linkedin}></Social>
            <hr></hr>
        </div>)
    })
    return funcionariosComponent
}

export const Social = (props) => {
    return (
        <div>
            <a href={props?.facebook}>Facebook</a>  {'   '} <a href={props?.linkedin}>linkedin</a>
        </div>
    )
}

export const Sobre = (props) => {
    return (
        <div>
            <p>Ninja: Olá sou o dev ninja {props.nome}</p>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

export const ConhecaAEquipe = (props) => {
    return (
        <div>
            <h1>
                Conheça nosso time
            </h1>
            <ConhecaOTime time= {props.time}></ConhecaOTime>
        </div>
    )

}