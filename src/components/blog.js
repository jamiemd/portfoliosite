import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div style={container}>
        <div style={title}>Blog</div>
        <div style={blogPostsContainer}>
          <a href="https://medium.com/@jamiedomingo/what-i-learned-at-lambda-school-eb6655b14ef">
            <div style={post}>
              <img
                style={postOne}
                src={require("../images/blogPostOne.png")}
                alt="What I learned in Lambda School"
              />
            </div>
          </a>
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

const blogPostsContainer = {
  margin: "0 auto",
  width: "900px",
  height: "500px",
  padding: "50px",
  display: "flex",
  justifyContent: "center"
};

const post = {
  width: "500px",
  height: "350px",
  border: ".5px solid",
  borderRadius: "1%",
  padding: "15px",
  backgroundColor: "white"
};

const postOne = {
  paddingTop: "15px"
};

export default Blog;
