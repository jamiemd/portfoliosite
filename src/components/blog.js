import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div id="blog" style={container}>
        <div style={title}>Blog</div>
        <div style={description}>Check out my blog posts on Medium.</div>
        <div style={blogPostsContainer}>
          <a href="https://medium.com/@jamiedomingo/what-i-learned-at-lambda-school-eb6655b14ef">
            <div style={postContainer}>
              <img
                style={post}
                src={require("../images/blogPostOne.png")}
                alt="What I learned in Lambda School"
              />
            </div>
          </a>
          <a href="https://medium.com/@jamiedomingo/how-i-contributed-to-a-code-base-that-was-new-to-me-c0e42eb0c37e">
            <div style={postContainer}>
              <img
                style={post}
                src={require("../images/blogPostTwo.png")}
                alt="How I Contributed to a Code Base That Was New to Me"
              />
            </div>
          </a>
          <a href="https://medium.com/@jamiedomingo/what-i-learned-at-lambda-school-eb6655b14ef">
            <div style={postContainer}>
              <img
                style={post}
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
  padding: "30px",
  display: "flex",
  justifyContent: "space-around"
};

const postContainer = {
  width: "350px",
  height: "240px",
  padding: "15px",
  margin: "30px",
  border: "1px solid gray"
};

const post = {
  paddingTop: "15px",
  maxWidth: "350px"
};

export default Blog;
