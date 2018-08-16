import React, { Component } from "react";

const Contact = () => {
  return (
    <div style={container}>
      <div style={contact}>Drop me message at</div>
      <div style={contact}>contact@jamiedomingo.com</div>
    </div>
  );
};

const container = {
  height: "300px",
  backgroundColor: "#323132"
};

const contact = {
  color: "white",
  letterSpacing: "2px"
};

export default Contact;
