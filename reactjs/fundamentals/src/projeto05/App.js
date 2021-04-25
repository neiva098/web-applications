import React, { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      status: true  
    }
    this.sair = this.sair.bind(this)
    this.entrar = this.entrar.bind(this)
  }

  sair() {
    this.setState({ status: false })
  }

  entrar() {
    this.setState({ status: true })
  }

  render() {
    return(
      <div>
        {/*   CONDICIONAL {
          this.state.status === 1 && <h1>Bem Vindo ao sistema</h1>
        }
        <div>
          <h2>
            Curso React JS
          </h2>
        </div> */
          this.state.status ? 
            <div>
              <h2>Bem Vindo ao sistema</h2>
              <button onClick={() => this.sair()}>
                Sair
              </button>
            </div>
            : 
            <div>
              <h2>Ola visitante faça logIn</h2>
              <button onClick={() => this.entrar()}>
                Entrar no Sistema
              </button>
            </div>
        }

      </div>
    )
  }
}

export default App;
