import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "Decision Jam Image Placeholder",
        "WikaKita",
        "Latern Drop",
        "https://raw.githubusercontent.com/jamiemd/jamiemd.github.com/master/images/projects/sushi_match.png"
      ],
      name: ["Decision Jam", "WikaKita", "Lantern Drop", "Sushi Match"],
      description: [
        "An app that allows users to vote on team decisions. I was part of a team of 3 where I was tasked with the creation of the frontend using React and the overall visual design using CSS. I also implemented the Stripe payment system to both the front and back ends.",
        "A Tagalog language learning game. I used the MERN stack as well as Redux for storing state.",
        "A Japanese kana typing game where I used Unity and also created all of the images.",
        "A simple matching game using the theme of sushi. I used Illustrator to draw all of the game screens and individual sushi and card images."
      ],
      currentIndex: 0
    };
  }

  nextSlide = arrowClick => {
    if (arrowClick === "left") {
      if (this.state.currentIndex >= 1) {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
      } else {
        this.setState({ currentIndex: 3 });
      }
    } else {
      if (this.state.currentIndex <= 2) {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      } else {
        this.setState({ currentIndex: 0 });
      }
    }
  };

  render() {
    console.log("this.state", this.state);
    console.log("this.props", this.props);
    return (
      <div style={container}>
        <div style={title}>Portfolio</div>
        <div style={carousel}>
          <button style={arrow} onClick={e => this.nextSlide("left")}>
            &lt;
          </button>
          <div style={imageContainer}>
            <img
              style={image}
              src={this.state.images[this.state.currentIndex]}
            />
            <div style={name}>{this.state.name[this.state.currentIndex]}</div>
            <div style={description}>
              {this.state.description[this.state.currentIndex]}
            </div>
          </div>
          <button style={arrow} onClick={e => this.nextSlide("right")}>
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

const arrow = {
  border: "none",
  fontSize: "45px",
  color: "gray"
};

const imageContainer = {
  display: "flex",
  flexDirection: "column"
};

const image = {
  width: "600px",
  marginLeft: "300px",
  marginRight: "300px"
};

const name = {
  fontSize: "20px",
  paddingTop: "50px"
};

const description = {
  fontSize: "14px",
  paddingTop: "30px"
};

export default Portfolio;
