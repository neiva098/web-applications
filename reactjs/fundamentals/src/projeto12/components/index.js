import React, { Component } from 'react'
import '../style.css'

class Aula extends Component{
  constructor(props){
    super(props)
    this.state = {
        url: 'https://sujeitoprogramador.com/rn-api/?api=posts',
        nutri: []
    }

  }


  componentDidMount() {
      fetch(this.state.url).then((value) => {
            value.json().then((json) => {
                this.setState({nutri: json})
            })
      })
  }

  render() {
    return(
      <div className='container'>
          <header>
              <strong>React Nutris</strong>
          </header>
          {this.state.nutri.map((item, index) => {
              return (
                  <article key={index} className='post'>
                      <strong className='titulo'>{item.titulo}</strong>
                      <img src={item.capa} className='capa'></img>
                      <p className='subtitulo'>{item.subtitulo}</p>
                      <a className='botao' href='https://sujeitoprogramador.com/nutriapp/'>Veja Mais</a>
                  </article>
              )
          })}
      </div>
    )
  }
}

export default Aula;
