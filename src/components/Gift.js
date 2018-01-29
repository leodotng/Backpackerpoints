import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const fixImage = {
  width: "50px",
  height: "50px"
};

const fixImageTwo = {
  width: "50px",
  height: "50px"
};

const fixImageThree = {
  width: "50px",
  height: "50px",
  opacity: "0.5",
  filter: "alpha(opacity=20)"
};

class Gift extends Component {
  render() {
    return (
      <div>
        <h1> Gift Points Here </h1>
        <h3> Buy points for others as a gift! Help them extend their trip!</h3>
        <img
          src="https://americannegotiationinstitute.com/wp-content/uploads/2016/12/gift-06.jpg"
          style={fixImage}
        />
        <img
          src="http://www.blog.points.com/wp-content/themes/caress-child/img/250x250_points.gif"
          style={fixImageTwo}
        />

        <img
          src="https://www.w3schools.com/css/img_forest.jpg"
          style={fixImageThree}
        />
      </div>
    );
  }
}
export default Gift;
