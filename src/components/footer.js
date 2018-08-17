import React from "react";

const Footer = () => {
  return (
    <div id="contact" style={container}>
      <div style={name}>Jamie Domingo 2018</div>
    </div>
  );
};

const container = {
  height: "200px",
  backgroundColor: "#323132",
  letterSpacing: "2px"
};

const name = {
  color: "white",
  paddingTop: "150px",
  fontSize: "14px"
};

export default Footer;
