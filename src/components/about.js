import React, { Component } from "react";

const About = () => {
  return (
    <div style={container}>
      <div style={title}>About</div>
      <div style={content}>
        {/* <hr style={hrLine} /> */}
        <div style={bio}>
          I am web developer living in the San Francisco Bay Area focused on
          creating websites using React/Redux with Express and Node for the
          backend. I also enjoy learning C# with Unity as well as desigining
          with Illustrator and Photoshop.
        </div>
        <div style={links}>
          <div style={linkPair}>
            <div style={icon} />
            <div style={link}>Resume</div>
          </div>
          <div style={linkPair}>
            <div style={icon} />
            <div style={link}>LinkedIn</div>
          </div>
          <div style={linkPair}>
            <div style={icon} />
            <div style={link}>GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const container = {
  margin: "0, auto",
  height: "600px",
  backgroundColor: "#f9f9f9"
};

const title = {
  fontSize: "25px",
  letterSpacing: "2px",
  paddingTop: "100px",
  paddingBottom: "80px",
  color: "#181717"
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
  color: "#181717"
};

// links

const links = {
  fontSize: "20px",
  marginTop: "20px"
};

const linkPair = {
  display: "flex"
};

const icon = {
  backgroundColor: "gray",
  width: "30px",
  height: "30px",
  marginRight: "40px"
};

const link = {
  textAlign: "left",
  paddingBottom: "40px",
  paddingTop: "3px"
};

export default About;
