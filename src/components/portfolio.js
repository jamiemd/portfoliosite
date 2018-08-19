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
        "A Tagalog language learning game created with React and Redux with MongoDB for the database",
        "A Japanese kana typing game where I used Unity with C#. I created all the images with Illustrator. ",
        "A simple matching game using the theme of sushi. I provided all the game screens and individual sushi and card images using Illustrator."
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
      <div id="portfolio" style={container}>
        <div style={title}>Portfolio</div>
        <div style={carousel}>
          <button style={arrow} onClick={e => this.nextSlide("left")}>
            &lt;
          </button>
          <div style={slide}>
            <div style={imageBox}>
              <div>
                <img
                  style={image}
                  src={this.state.images[this.state.currentIndex]}
                  alt="images"
                />
              </div>
            </div>
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
  height: "1100px",
  backgroundColor: "#D3E5FF"
};

const title = {
  fontSize: "30px",
  letterSpacing: "3px",
  paddingTop: "100px",
  paddingBottom: "80px",
  color: "#181717"
};

const carousel = {
  paddingTop: "20px",
  display: "flex",
  justifyContent: "space-around"
};

const arrow = {
  border: "none",
  fontSize: "45px",
  outline: "none",
  backgroundColor: "#D3E5FF"
};

const slide = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const imageBox = {
  width: "700px",
  height: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const image = {
  width: "700px"
};

const name = {
  fontSize: "20px",
  fontWeight: "500",
  paddingTop: "50px"
};

const description = {
  fontSize: "16px",
  paddingTop: "30px",
  width: "500px",
  height: "200px",
  textAlign: "left",
  lineHeight: "2",
  margin: "auto"
};

export default Portfolio;
