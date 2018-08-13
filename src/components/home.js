import React, { Component } from 'react';
import Intro from "./intro";
import Carousel from "./carousel";
import Blog from "./blog";

class Home extends Component {
  render() {
    return (
    <div style={container}>
     <Intro/>
     <Carousel/>
     <Blog/>
      <div style={contact}>
      Drop me message at contact@jamiedomingo.com
        </div>
        </div>
    )}


}

const container = {
  width: '800px'
}


const contact = {
  color: 'blue'
}




export default Home;