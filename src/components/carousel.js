import React, { Component } from 'react';

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images:['decisionjam', 'wikakita'],
            currentSlide: 0
        }
    }

    
    previousSlide = () => {
    }

    nextSlide = () => {

    }


render () {
    return (
        <div className="carousel">
        <div style={leftArrow} onClick={this.props.previousSlide}>left</div>
        <div style={rightArrow} onClick={this.props.nextSlide}>right</div>
        </div>
    )
    }
}

const leftArrow = {
    color: 'green'
}

const rightArrow = {
    color: 'green'
}

export default Carousel;
