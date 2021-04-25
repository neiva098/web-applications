import React, { Component } from 'react';
import ToDo from './toDo'

class Aula extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div>
          <h2>Lista de Tarefas</h2>
          <ToDo/>
      </div>
    )
  }
}

export default Aula;
