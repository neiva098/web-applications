import React, { Component } from 'react';
import '../style.css'

class Cronometro extends Component{
  constructor(props){
    super(props)
    this.state = {
      contador: 0,
      acao: 'Vai'
    }
    this.roda = null

    this.vai = this.vai.bind(this)
    this.limpa = this.limpa.bind(this)
  }
  vai() {
    if(this.roda !== null) {
      clearInterval(this.roda)
      this.roda = null
      this.setState({
        acao: 'Vai'
      })
    } else {
      this.roda = setInterval(() => {
        this.setState({
          contador: this.state.contador+=0.1,
          acao: 'Para'
        })
      }, 100)
    }
  }

  limpa() {
    this.vai()
    this.setState({contador: 0})
  }

  render() {
    return(
      <div className='container'>
         <img src={require('../assets/cronometro.png')} className='img'></img>
         <a className='timer'>{this.state.contador.toFixed(1)}</a>
         <div className='areaBtn'>
             <a className='botao' onClick={this.vai}>{this.state.acao}</a>
             <a className='botao' onClick={this.limpa}>Limpar</a>
         </div>
      </div>
    )
  }
}

export default Cronometro;
