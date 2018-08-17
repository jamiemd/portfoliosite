import React, { Component } from "react";

const Title = () => {
  return (
    <div style={container}>
      <div style={circle} />
      <div style={name} href="jamiedomingo.com" title="Jamie Domingo">
        JAMIE DOMINGO
      </div>
    </div>
  );
};

const container = {
  height: "700px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "50px"
};

const circle = {
  height: "200px",
  width: "200px",
  backgroundColor: "gray",
  borderRadius: "50%",
  textAlign: "center",
  marginBottom: "30px"
};

const name = {
  fontSize: "40px",
  textDecoration: "none",
  letterSpacing: "5px"
};

export default Title;
