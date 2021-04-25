import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import './style.css'
import { loadOneMovie } from '../../services/api'


export default (props: RouteComponentProps) => {
    const [filme, setFilme] = useState<any>(undefined!)

    useEffect(() => {
        async function loadMovie() {
            const { id }: any = props.match.params
            const res = await loadOneMovie(id)

            setFilme(res)
        }

        loadMovie()
    })

    return (
        <div className='filme-info'>
            <h1>
                {filme?.nome}
            </h1>
            <img
                src={filme?.foto}
                alt='imagem'
            />
            <h3>Sinopse</h3>
            {filme?.sinopse}
        </div>
    )
}