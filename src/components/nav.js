import React, { Component } from "react";

const Navigation = () => {
  return (
    <div style={container}>
      <a style={navLinks} title="About">
        About
      </a>
      <div style={divider}>/</div>
      <a style={navLinks} title="Portfolio">
        Portfolio
      </a>
      <div style={divider}>/</div>
      <a style={navLinks} title="Blog">
        Blog
      </a>
      <div style={divider}>/</div>
      <a style={navLinks} title="Contact">
        Contact
      </a>
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
  letterSpacing: "1px"
};

const divider = {
  padding: "20px"
};

export default Navigation;
