import React, { Component } from 'react';
import Feed from './projeto06/components/feed'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
        feed: [
            {id: 1, username: 'Cristiano', curtidas: 12, comentarios: 2 },
            {id: 2, username: 'Barbara', curtidas: 13, comentarios: 3 },
            {id: 3, username: 'Vania', curtidas: 15, comentarios: 4 },
        ]
    }

  }


  render() {
    return(
      <div>
          {this.state.feed.map((item) => {
              return (
                  <Feed item={item} key={item.id}/>
              )
          })}
      </div>
    )
  }
}

export default App;
