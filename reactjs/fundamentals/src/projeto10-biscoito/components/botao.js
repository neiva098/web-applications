import React, { Component } from 'react'
import '../style.css'
class Botao extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <button className='button' onClick={this.props.acao}>{this.props.nome}</button>
        )
    }
}

export default Botao