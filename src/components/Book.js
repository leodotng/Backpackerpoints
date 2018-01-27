import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Box from "./Box";


const fixImage = {
    width: "150px",
    height: "150px",
    align: "middle",
    display: "inline-block"
  };
class Book extends Component {
    render() {
        return (
                <div>
                    <h1> Book your Hostel with your Backpackerpoints! </h1>
                    <img src="http://s3.amazonaws.com/popalz-media/listingimages/-46368924391.JPG" style={fixImage} />
                    <Box />
                    
                </div>
        )
    }
}
export default Book;