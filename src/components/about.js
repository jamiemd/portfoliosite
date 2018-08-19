import React from "react";

const About = () => {
  return (
    <div id="about" style={container}>
      <div style={title}>About</div>
      <div style={pic} />

      <div style={content}>
        {/* <hr style={hrLine} /> */}

        <div style={leftColumnContainer}>
          <div style={bio}>
            After a few years in corporate accounting, I took the plunge and
            enrolled in Lambda’s School’s computer science program where I
            learned web development using Javascript, React, Redux, HTML, CSS,
            Node, Express, and MongoDB as well as computer science theory. With
            my new set of skills, I’d like to create clean and functional web
            application.
          </div>
          <div style={contact}>
            Email me at:
            <a style={email} href="mailto:name@email.com">
              contact@jamiedomingo.com
            </a>
          </div>
        </div>
        <div style={links}>
          <a
            style={anchor}
            href={require("../images/jamiedomingo_resume.pdf")}
            download
          >
            <div style={linkPair}>
              <img
                style={icon}
                src={require("../images/download_icon.png")}
                alt="Download Icon"
              />
              <div style={iconText}>Resume</div>
            </div>
          </a>
          <a style={anchor} href="https://www.linkedin.com/in/jamiedomingo/">
            <div style={linkPair}>
              <img
                style={icon}
                src={require("../images/Linkedin_icon.svg")}
                alt="LinkedIn Icon"
              />
              <div style={iconText}>LinkedIn</div>
            </div>
          </a>
          <a style={anchor} href="https://github.com/jamiemd">
            <div style={linkPair}>
              <img
                style={icon}
                src={require("../images/github_icon.png")}
                alt="GitHub Icon"
              />
              <div style={iconText}>GitHub</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const container = {
  margin: "0, auto",
  height: "1000px"
};

const title = {
  fontSize: "30px",
  letterSpacing: "3px",
  paddingTop: "100px",
  paddingBottom: "80px"
};

const hrLine = {
  border: 0,
  height: ".5px",
  width: "400px",
  backgroundColor: "black",
  marginBottom: "20px"
};

const pic = {
  height: "250px",
  width: "250px",
  backgroundColor: "gray",
  borderRadius: "50%",
  margin: "auto",
  marginBottom: "80px"
};

const content = {
  display: "flex",
  margin: "0 auto",
  width: "60%"
};

const leftColumnContainer = {};

const bio = {
  fontSize: "20px",
  width: "700px",
  lineHeight: "2",
  letterSpacing: "1.5px",
  textAlign: "left",
  color: "black",
  marginRight: "100px",
  marginBottom: "50px"
};

const contact = {
  color: "black",
  letterSpacing: "1px",
  fontSize: "20px",
  paddingBottom: "2px",
  textAlign: "left"
};

const email = {
  textDecoration: "none",
  color: "red",
  fontSize: "20px",
  marginLeft: "3px"
};

const links = {
  fontSize: "20px"
};

const linkPair = {
  border: "1px solid black",
  display: "flex",
  marginBottom: "30px",
  // borderRadius: "10px",
  padding: "10px 15px 10px 15px"
};

const anchor = {
  textDecoration: "none"
};

const icon = {
  width: "45px",
  height: "45px",
  marginRight: "20px"
};

const iconText = {
  textAlign: "left",
  paddingTop: "10px",
  color: "black"
};

export default About;
