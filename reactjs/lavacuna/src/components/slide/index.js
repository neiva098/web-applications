import React, { Component } from 'react'
import './style.css'
import { withRouter } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { handleChangeImageIndex } from './utils/slide'
const imagens = require('../../assets/imagensGaleria.json')

class Slide extends Component {
    index = 0
    images = imagens

    constructor(props) {
        super(props)
        this.state = {
            styleContainer: {
                backgroundImage: imagens[0],
            },

            backGroundImageInfo: {
                title: '',
                text: '',
                link: ''
            }
        }
        this.handleChangeImage = this.handleChangeImage.bind(this)
    }

    async componentDidMount() {
        setInterval(() => {
            this.handleChangeImage()
        }, 6000)
    }

    handleChangeImage(direction) {
        this.index = handleChangeImageIndex(this.index, this.images.length, direction)

        const styleContainer = { ...this.state.styleContainer }
        const backGroundImageInfo = { ...this.state.backGroundImageInfo }

        styleContainer.backgroundImage = this.images[this.index]
        backGroundImageInfo.text = this.images[this.index]?.text || ''
        backGroundImageInfo.title = this.images[this.index]?.title || ''
        backGroundImageInfo.link = this.images[this.index]?.link || ''

        this.setState({ styleContainer, backGroundImageInfo })
    }

    handleArrowImage(direction) {
        this.handleChangeImage(direction)
    }

    render() {
        return (
            <div className='slide-container' style={this.state.styleContainer} id='slide'>
                <FiArrowLeft id='left' className='button' size={5} onClick={() => this.handleArrowImage('left')}></FiArrowLeft>
                <div className='image-info' onClick={() => this.props.history.push('/profile')}>
                    <h1>{this.state.backGroundImageInfo.title}</h1>
                    <p>{this.state.backGroundImageInfo.text}</p>
                </div>
                <FiArrowRight id='right' className='button' size={5} onClick={() => this.handleArrowImage('right')}></FiArrowRight>
            </div>
        )
    }
}

export default withRouter(Slide);
