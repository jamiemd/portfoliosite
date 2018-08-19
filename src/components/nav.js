import React, { Component } from "react";

class Navigation extends Component {
  state = {
    isTop: true
  };

  componentDidMount = () => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 1000;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  };

  render() {
    return (
      <div>
        <div style={this.state.isTop ? whiteBg : blackBg}>
          <a
            style={this.state.isTop ? blackLinks : whiteLinks}
            href="#about"
            title="About"
          >
            About
          </a>
          <div style={divider}>/</div>
          <a
            style={this.state.isTop ? blackLinks : whiteLinks}
            href="#portfolio"
            title="Portfolio"
          >
            Portfolio
          </a>
          <div style={divider}>/</div>
          <a
            style={this.state.isTop ? blackLinks : whiteLinks}
            href="#blog"
            title="Blog"
          >
            Blog
          </a>
        </div>
      </div>
    );
  }
}

const whiteBg = {
  top: 0,
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  width: "100%",
  padding: "5px",
  backgroundColor: "white"
};

const blackBg = {
  top: 0,
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  width: "100%",
  padding: "5px",
  color: "white",
  backgroundColor: "black"
};

const whiteLinks = {
  padding: "20px",
  letterSpacing: "1px",
  fontSize: "18px",
  textDecoration: "none",
  color: "white"
};

const blackLinks = {
  padding: "20px",
  letterSpacing: "1px",
  fontSize: "18px",
  textDecoration: "none",
  color: "black"
};

const divider = {
  padding: "20px"
};

export default Navigation;
