import React, { Component } from "react";
import Navigation from "./nav";
import Title from "./title";
import About from "./about";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Contact from "./contact";

class Home extends Component {
  render() {
    return (
      <div style={container}>
        <Navigation />
        <Title />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    );
  }
}

const container = {};

export default Home;
