import React, { Component } from "react";

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      blogPosts: [
        {
          title: "What I learned in Lambda School",
          imageFile: require("../images/blogPostOne.png"),
          link:
            "https://medium.com/@jamiedomingo/what-i-learned-at-lambda-school-eb6655b14ef"
        },
        {
          title: "How I Contributed to a Code Base That Was New to Me",
          imageFile: require("../images/blogPostTwo.png"),
          link:
            "https://medium.com/@jamiedomingo/how-i-contributed-to-a-code-base-that-was-new-to-me-c0e42eb0c37e"
        },
        {
          title: "How I Learned a New Framework in 1 Week",
          imageFile: require("../images/blogPostThree.png"),
          link:
            "https://medium.com/@jamiedomingo/how-i-learned-a-new-framework-in-1-week-b662f1d60922"
        },
        {
          title: "How I Published My First Open Source Tool",
          imageFile: require("../images/blogPostFour.png"),
          link:
            "https://medium.com/@jamiedomingo/how-i-contributed-to-my-first-open-source-project-e860035f23ae"
        },
        {
          title: "How I Planned A Project",
          imageFile: require("../images/blogPostFive.png"),
          link:
            "https://medium.com/@jamiedomingo/how-i-planned-a-project-73e8906055b5"
        }
      ]
    };
  }

  render() {
    console.log("this.state.blogPosts", this.state.blogPosts);
    return (
      <div id="blog" style={container}>
        <div style={title}>Blog</div>
        <div style={description}>Check out my blog posts on Medium.</div>
        <div style={blogPostsContainer}>
          {this.state.blogPosts.map((blogPost, i) => (
            <a href={blogPost.link} key={i}>
              <div style={postContainer}>
                <img
                  style={post}
                  src={blogPost.imageFile}
                  alt={blogPost.title}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

const container = {
  height: "1000px",
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
  justifyContent: "space-around",
  display: "grid",
  gridTemplateColumns: "repeat(3, 450px)",
  justifyContent: "center",
  margin: "5px"
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
