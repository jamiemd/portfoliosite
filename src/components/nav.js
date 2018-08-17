import React from "react";

const Navigation = () => {
  return (
    <div>
      <div style={container}>
        <a style={navLinks} href="#about" title="About">
          About
        </a>
        <div style={divider}>/</div>
        <a style={navLinks} href="#portfolio" title="Portfolio">
          Portfolio
        </a>
        <div style={divider}>/</div>
        <a style={navLinks} href="#blog" title="Blog">
          Blog
        </a>
      </div>
    </div>
  );
};

const container = {
  top: 0,
  display: "flex",
  justifyContent: "center",
  position: "fixed",
  width: "100%",
  padding: "5px",
  backgroundColor: "white"
};

const navLinks = {
  padding: "20px",
  letterSpacing: "1px",
  fontSize: "18px",
  textDecoration: "none",
  color: "black"
};

const divider = {
  padding: "20px"
};

const hrLine = {
  border: 0,
  height: ".5px",
  width: "400px",
  backgroundColor: "black",
  marginBottom: "20px"
};

export default Navigation;
