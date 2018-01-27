import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const fixImage = {
    width: "150px",
    height: "150px",
    align: "middle",
    display: "inline-block"
  };
class BuyPoints extends Component {
    render() {
        return (
                <div>
                    <h1> Buy Points Here </h1>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_549461.png" style={fixImage} />
                    <p> Buy 100 points $25 </p>
                    <p> Buy 200 points $45 </p>
                    <p> Buy 500 points $100 </p>
                    
                </div>
        )
    }
}
export default BuyPoints;