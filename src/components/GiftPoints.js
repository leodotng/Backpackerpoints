import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";


const fixImage = {
    width: "300px",
    height: "300px"
  };

  const fixImageTwo = {
    width: "250px",
    height: "250px"
  };


class GiftPoints extends Component {





    render() {
        return (
            <div>
                <h1> Gift Points Here </h1>
                <img src="https://americannegotiationinstitute.com/wp-content/uploads/2016/12/gift-06.jpg" style={fixImage} />
                <img src="http://www.blog.points.com/wp-content/themes/caress-child/img/250x250_points.gif" style={fixImageTwo} />

                </div>
                
        )
    }
}
export default GiftPoints;