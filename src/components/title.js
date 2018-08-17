import React from "react";

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
  paddingTop: "50px",
  backgroundColor: "#FF9999"
};

const circle = {
  height: "250px",
  width: "250px",
  backgroundColor: "white",
  borderRadius: "50%",
  textAlign: "center",
  marginBottom: "30px"
};

const name = {
  fontSize: "40px",
  textDecoration: "none",
  letterSpacing: "4px",
  color: "white"
};

export default Title;
