import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const fixImage = {
  width: "50px",
  height: "50px"
};

class Earn extends Component {
  render() {
    return (
      <div>
        <h1> Earn Points Here </h1>
        <img
          src="https://calgarysquashleague.ca/wp-content/uploads/earnpoints.png"
          alt="Earn Points!"
          style={fixImage}
        />
      </div>
    );
  }
}
export default Earn;
