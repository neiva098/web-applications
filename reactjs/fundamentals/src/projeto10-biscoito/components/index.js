import React, { Component } from 'react'
import '../style.css'
import Botao from './botao'
class Biscoito extends Component {
    constructor(props) {
        super(props)
        this.state = {
            frase: 'Acione o botão e tente a sorte!',
        }
        this.frases =  [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'
        ]
        this.quebraBiscoito = this.quebraBiscoito.bind(this)
    }

    quebraBiscoito() {
        const index = Math.floor(Math.random() * (this.frases.length - 1))
        const frase = this.frases[index]
        this.setState({frase: frase})
    }

    render() {
        return (
            <div className='container'>
                <img src={require('../assets/biscoito.png')} className='img'></img>
                <Botao nome='Abrir biscoito' acao={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.frase}</h3>
            </div>
        )
    }
}

export default Biscoito