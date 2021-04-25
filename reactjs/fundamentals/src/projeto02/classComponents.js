import React , { Component } from 'react'

class MainComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            nome: 'Cristiano',
            contador: 0,
        }


        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    aumentar() {
        let state = this.state
        state.contador++
        this.setState(state)
    }

    diminuir() {
        let state = this.state
        if (state.contador === 0) {
            return alert('O contador não pode ser menor que 0')
        }
        state.contador--
        this.setState(state)
    }

    render() {
        return (
            <div>
                <h1>Contador do {this.state.nome}</h1>
                <h3>
                    <button onClick={this.diminuir}>-</button>
                        {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        )
    }
}

export default MainComponent