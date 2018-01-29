import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from "../Auth/Auth.js";

const fixImage = {
  width: "300px",
  height: "50px"
};

const fixImageTwo = {
  width: "250px",
  height: "250px"
};


class Login extends Component {
  render() {
    return (
      <div>
        <h1> Login </h1>
        <img
          src="https://www.glsen.org/sites/default/files/LOGIN.jpg"
          style={fixImage}
        />
      </div>
    );
  }
}
export default Login;
