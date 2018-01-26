import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const fixImage = {
    width: "300px",
    height: "300px",
    align: "center"
  };
class BuyPoints extends Component {
    render() {
        return (
                <div>
                    <h1> Buy Points Here </h1>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_549461.png" style={fixImage} />
                </div>
        )
    }
}
export default BuyPoints;