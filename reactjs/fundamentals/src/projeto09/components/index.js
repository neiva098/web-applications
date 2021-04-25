import React, { Component } from 'react';

class Formulario extends Component{
  constructor(props){
    super(props)
    this.state = {
        form: {
            nome: '',
        email: '',
        senha: '',
        sexo: '',
        },
        error: undefined
    }
    this.cadastrar = this.cadastrar.bind(this)
    this.mudaDados = this.mudaDados.bind(this)
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

  mudaDados(event) {
    let form = this.state.form

    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  render() {
    return(
      <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.cadastrar}>
              <label>Nome:</label>
              <input type='text' name='nome' value={this.state.form.nome} onChange={this.mudaDados}></input>
              <br></br>
              <label>Email:</label>
              <input type='email' name='email' value={this.state.form.email} onChange={this.mudaDados}></input>
              <br></br>
              <label>Senha:</label>
              <input type='password' name='senha' value={this.state.form.senha} onChange={this.mudaDados}></input>
              <br></br>
            <button type='submit'>Cadastrar</button>
          </form>
      </div>
    )
  }
}

export default Formulario;
