import React, { Component } from 'react';
import Feed from './projeto06/components/feed'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: 'test@test.com',
      senha: '',
      sexo: 'masculino',
    }
    this.trocaEmail = this.trocaEmail.bind(this)
  }

  trocaEmail(e) {
    let valorDigitado = e.target.value
    this.setState({email: valorDigitado})
  }

  render() {
    return(
      <div>
        <h2>LogIn</h2>
        <label>Email</label> 
        <input type='email' name='email' value={this.state.email} onChange={(e) => this.trocaEmail(e)}></input>
        <br></br>
        <label>Password</label> 
        <input type='password' name='password' value={this.state.senha} onChange={(e) => {
          const valorDigitado = e.target.value
          this.setState({senha: valorDigitado})
        }}></input>
        <br></br>
        Sexo:
        <select name='sexo' value={this.state.sexo} onChange={(e)=> {
          this.setState({sexo: e.target.value})
        }}>
          <option value='Masculino'>Masc</option>
          <option value='Feminino'>Fem</option>
        </select>
      </div>
    )
  }
}

export default App;
