import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div style={container}>
        <div style={title}>Blog</div>
        <div style={blogPostContainer}>
          <div>What I learned in Lambda School</div>
          <div>August 17, 2018</div>
          <div>blah blah blah</div>
        </div>
      </div>
    );
  }
}

const container = {
  height: "900px",
  backgroundColor: "#f9f9f9"
};

const title = {
  fontSize: "25px",
  letterSpacing: "2px",
  paddingTop: "100px",
  paddingBottom: "80px",
  color: "#181717"
};

const blogPostContainer = {
  margin: "0 auto",
  width: "600px",
  height: "500px",
  padding: "50px"
};

export default Blog;
