import React, { Component } from 'react';

class ToDolist extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
    this.delete = this.delete.bind(this)
  }

  delete(key) {
    this.props.deleteItem(key)
  }

  render() {
    return(
      <div>
          <ul>
              { this.props.tarefas.map((item) => {
                  return (
                      <li key={item.key} onClick={() => this.delete(item.key)}>
                        {item.text}
                      </li>
                  )
              }) }
          </ul>
      </div>
    )
  }
}

export default ToDolist;
