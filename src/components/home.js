import React, { Component } from "react";
import Navigation from "./nav";
import Title from "./title";
import About from "./about";
import Portfolio from "./portfolio";
import Blog from "./blog";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div style={container}>
        <Navigation />
        <Title />
        <About />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
    );
  }
}

const container = {};

export default Home;
