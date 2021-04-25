import React, { Component } from 'react'
import ToDolist from './toDolist'
import * as uuid from 'uuid'

class ToDO extends Component{
  constructor(props){
    super(props)
    this.state = {
        tarefa: '',
        tarefas: []
    }
    this.addTarefa = this.addTarefa.bind(this)
    this.log = this.log.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addTarefa(e) {
    if(!this._tarefaInput.value) return
    const newItem = {
        text: this._tarefaInput.value,
        key: uuid.v4()
    }
    this.setState({tarefas: [...this.state.tarefas, newItem], tarefa: ''})
    e.preventDefault()
  }

  log(e) {
    console.log(this.state.tarefas)
  }

  deleteItem(key) {
    const localTarefas = this.state.tarefas.filter((tarefa) => tarefa.key !== key)

    this.setState({tarefas: localTarefas})
  }

  render() {
    return(
      <div>
          <form onSubmit={this.addTarefa}>
              <input type='text' placeholder='Nova Tarefa' name='tarefa' value={this.state.tarefa} onChange={(e) => {
                  this.setState({tarefa: e.target.value})
              }} ref={(e) => {
                this._tarefaInput = e
              }}></input>
              <button type='submit'>
                  Adicionar
              </button>
          </form>
          <button onClick={this.log}>log</button>
          <ToDolist tarefas={this.state.tarefas} deleteItem={this.deleteItem}/>
      </div>
    )
  }
}

export default ToDO;
