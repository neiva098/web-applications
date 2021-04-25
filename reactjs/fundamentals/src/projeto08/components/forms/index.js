import React, { Component } from 'react';

class Formulario extends Component{
  constructor(props){
    super(props)
    this.state = {
        nome: '',
        email: '',
        senha: '',
        error: undefined
    }
    this.alteraNome = this.alteraNome.bind(this)
    this.alteraEmail = this.alteraEmail.bind(this)
    this.alteraSenha = this.alteraSenha.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  alteraNome(event) {
    this.setState({nome: event.target.value})
  }

  alteraEmail(event) {
    this.setState({email: event.target.value})
  }

  alteraSenha(event) {
    this.setState({senha: event.target.value})
  }

  cadastrar(event) {
    const { nome, email, senha} = this.state

    if (nome !== '' && email !== '' && senha !== '') {
        this.setState({error: undefined})
        alert(`Nome: ${nome}\n Email: ${email}\n Senha: ${senha}`)
    } else {
        this.setState({error: 'ERROU'})
    }

    event.preventDefault()
  }

  render() {
    return(
      <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.cadastrar}>
              <label>Nome:</label>
              <input type='text' value={this.state.nome} onChange={this.alteraNome}></input>
              <br></br>
              <label>Email:</label>
              <input type='email' value={this.state.email} onChange={this.alteraEmail}></input>
              <br></br>
              <label>Senha:</label>
              <input type='password' value={this.state.senha} onChange={this.alteraSenha}></input>
              <br></br>
            <button type='submit'>Cadastrar</button>
          </form>
      </div>
    )
  }
}

export default Formulario;
