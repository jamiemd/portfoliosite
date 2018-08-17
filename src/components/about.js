import React from "react";

const About = () => {
  return (
    <div id="about" style={container}>
      <div style={title}>About</div>
      <div style={content}>
        {/* <hr style={hrLine} /> */}
        <div style={bio}>
          I am a web developer based in San Francisco. My focus is building
          websites using Javascript with React, Redux, HTML, CSS, Express, Node,
          and MongoDB. Creating clean functional websites is my goal. I also
          enjoy working on Unity using C# as well as desigining with Illustrator
          and Photoshop.
        </div>
        {/* <div id="contact">
          <div style={contact}>Email me at</div>
          <a style={email} href="mailto:name@email.com">
            contact@jamiedomingo.com
          </a>
        </div> */}
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
  height: "600px",
  backgroundColor: "#F2F2F2"
};

const title = {
  fontSize: "30px",
  letterSpacing: "3px",
  paddingTop: "100px",
  paddingBottom: "80px",
  color: "#606060"
};

const hrLine = {
  border: 0,
  height: ".5px",
  width: "400px",
  backgroundColor: "black",
  marginBottom: "20px"
};

const content = {
  display: "flex",
  justifyContent: "space-around",
  margin: "0 auto",
  width: "1200px"
};

const bio = {
  fontSize: "20px",
  width: "700px",
  lineHeight: "2",
  letterSpacing: "1.5px",
  textAlign: "left",
  paddingTop: "15px",
  color: "#606060"
};

const contact = {
  color: "606060",
  letterSpacing: "2px",
  fontSize: "14px",
  paddingBottom: "2px"
};

const email = {
  textDecoration: "none",
  color: "606060",
  fontSize: "14px"
};

// links

const links = {
  fontSize: "20px",
  marginTop: "20px"
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
