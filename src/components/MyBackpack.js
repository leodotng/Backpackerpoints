import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const fixImage = {
    width: "100px",
    height: "100px"
  };

  const alignment = {
      alignText: "center"
  }



class MyBackpack extends Component {





    render() {
        return (
            <div style={alignment}>
                <h1> Here is your Backpacker Points Digital Backpack</h1>
                <img src="https://pbs.twimg.com/profile_images/954481161379700736/Y4FygLho_400x400.jpg" style={fixImage} />
                
                </div>
        )
    }
}
export default MyBackpack;