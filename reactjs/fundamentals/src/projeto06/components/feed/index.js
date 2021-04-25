import React, { Component } from 'react'

class Feed extends Component {
    render() {
        return (
            <div>
                <h3> {this.props.item.username}</h3>
                <a>
                    {this.props.item.curtidas} curtidas  {this.props.item.comentarios} comentarios
                </a>
            </div>
        )
    }
}

export default Feed