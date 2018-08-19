import React from "react";

const Title = () => {
  return (
    <div style={backgroundColor}>
      <div style={container}>
        {/* <div style={logo} /> */}
        <div style={name}>JAMIE DOMINGO</div>
        <div style={description}>
          Web Developer based in the San Francisco Bay Area
        </div>
      </div>
    </div>
  );
};

const backgroundColor = {
  backgroundColor: "#FF9999"
};

const container = {
  height: "900px",
  paddingTop: "50px",
  width: "70%",
  margin: "auto"
};

// const logo = {
//   height: "250px",
//   width: "250px",
//   backgroundColor: "white",
//   borderRadius: "50%",
//   textAlign: "center",
//   marginBottom: "30px"
// };

const name = {
  fontSize: "100px",
  textDecoration: "none",
  letterSpacing: "1px",
  color: "white",
  textAlign: "left",
  marginTop: "200px",
  display: "block",
  width: "300px",
  lineHeight: "100px",
  fontWeight: "500"
};

const description = {
  marginTop: "20px",
  fontSize: "40px",
  color: "gray",
  textAlign: "left",
  width: "500px",
  lineHeight: "50px"
};

export default Title;
