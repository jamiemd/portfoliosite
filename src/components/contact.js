import React, { Component } from "react";

const Contact = () => {
  return (
    <div style={container}>
      <div style={contact}>Contact me at contact@jamiedomingo.com</div>
    </div>
  );
};

const container = {
  height: "300px",
  backgroundColor: "#323132"
};

const contact = {
  color: "white",
  letterSpacing: "2px",
  paddingTop: "150px"
};

export default Contact;
