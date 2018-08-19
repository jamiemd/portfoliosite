import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div id="blog" style={container}>
        <div style={title}>Blog</div>
        <div style={description}>Check out my blog posts on Medium.</div>
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
          <a href="">
            <div style={post}>New post on the way!</div>
          </a>
        </div>
      </div>
    );
  }
}

const container = {
  height: "800px",
  width: "60%",
  margin: "auto"
};

const title = {
  fontSize: "30px",
  letterSpacing: "3px",
  paddingTop: "100px",
  paddingBottom: "20px",
  textAlign: "center"
};

const description = {
  textAlign: "center",
  letterSpacing: "1px"
};

const blogPostsContainer = {
  margin: "0 auto",
  width: "900px",
  height: "500px",
  padding: "50px",
  display: "flex",
  justifyContent: "space-around"
};

const post = {
  width: "500px",
  height: "350px",
  padding: "15px",
  margin: "30px",
  border: "1px solid gray"
};

const postOne = {
  paddingTop: "15px"
};

export default Blog;
