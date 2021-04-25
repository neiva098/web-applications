import React , { Component } from 'react'

class MainComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hora: '00:00:00',
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                hora: new Date().toTimeString()
            })
        }, 500)
    }

    componentDidUpdate() {
        console.log('Atualizou')
    }

    shouldComponentUpdate() {
        return this.state.hora.includes('55')
    }

    render() {
        return (
            <div>
                <h1>Relogio {this.state.hora}</h1>
            </div>
        )
    }
}

export default MainComponent