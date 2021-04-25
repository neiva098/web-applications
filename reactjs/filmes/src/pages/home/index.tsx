import React, { Component } from 'react'
import { loadMovies as apiLoadMovies, } from '../../services/api'
import { Link } from 'react-router-dom'
import './style.css'

class Home extends Component<any, { filmes: any[] }> {
    constructor(props: any) {
        super(props)

        this.state = {
            filmes: []
        }

        this.loadMovies = this.loadMovies.bind(this)
    }

    async loadMovies() {
        const filmes = await apiLoadMovies()
        this.setState({ filmes })
    }

    async componentDidMount() {
        await this.loadMovies()
    }

    render() {
        return (
            <div className='container'>
                <div className='lista-filmes'>
                    {
                        this.state.filmes.map((filme: any) => (
                            <article key={filme.id} className='filme'>
                                <strong>
                                    {filme.nome}
                                </strong>
                                <img src={filme.foto} alt='Capa'></img>
                                <Link to={`/filme/${filme.id}`} >
                                    Acessar
                                </Link>
                            </article>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Home