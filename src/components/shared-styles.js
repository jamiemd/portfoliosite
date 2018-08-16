import React from "react";

const SharedStyles = props => {
  console.log("this.props", this.props);
  return <div style={container}>{props.children}</div>;
};

const container = {
  margin: "auto",
  width: "1000px",
  height: "900px"
};

const title = {
  fontSize: "25px",
  letterSpacing: "1px",
  paddingTop: "50px"
};

export default SharedStyles;
