import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const fixImage = {
    width: "300px",
    height: "300px"
  };



class MyBackpack extends Component {





    render() {
        return (
            <div>
                <h1> Here is your Backpacker Points Digital Backpack</h1>
                <img src="https://pbs.twimg.com/profile_images/954481161379700736/Y4FygLho_400x400.jpg" style={fixImage} />
                
                </div>
        )
    }
}
export default MyBackpack;