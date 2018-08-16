import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ["decisionjam", "wikakita", ""],
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
    console.log("this.props", this.props);
    return (
      <div style={container}>
        <div style={title}>Portfolio</div>
        <div style={carousel}>
          <button style={leftArrow} onClick={e => this.nextSlide("left")}>
            &lt;
          </button>
          <div style={image}>{this.state.images[this.state.currentIndex]}</div>
          <button style={rightArrow} onClick={e => this.nextSlide("right")}>
            >
          </button>
        </div>
      </div>
    );
  }
}

const container = {
  height: "1000px"
};

const title = {
  fontSize: "25px",
  letterSpacing: "2px",
  paddingTop: "100px",
  paddingBottom: "80px",
  color: "#181717"
};

const carousel = {
  paddingTop: "20px",
  display: "flex",
  justifyContent: "center"
};

const leftArrow = {
  border: "none",
  fontSize: "45px"
};

const rightArrow = {
  border: "none",
  fontSize: "45px"
};

const image = {
  width: "500px",
  height: "500px",
  backgroundColor: "blue",
  marginLeft: "300px",
  marginRight: "300px"
};

export default Portfolio;
