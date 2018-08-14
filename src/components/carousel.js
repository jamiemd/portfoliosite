import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["decisionjam", "wikakita"],
      currentIndex: 0
    };
  }

  nextSlide = arrowClick => {
    if (arrowClick === "left") {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    } else if (arrowClick === "right") {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  render() {
    console.log("this.state", this.state);
    console.log(
      "this.state.images[currentIndex]",
      this.state.images[this.state.currentIndex]
    );
    return (
      <div className="carousel">
        <button style={leftArrow} onClick={e => this.nextSlide("left")}>
          left
        </button>
        <div style={image}>{this.state.images[this.state.currentIndex]}</div>
        <button style={rightArrow} onClick={e => this.nextSlide("right")}>
          right
        </button>
      </div>
    );
  }
}

const leftArrow = {
  color: "green"
};

const rightArrow = {
  color: "orange"
};

const image = {
  width: "200px"
};

export default Carousel;
