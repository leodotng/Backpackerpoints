import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import { Security, ImplicitCallback } from "@okta/okta-react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
import "reactsymbols-kit/ReactSymbolsKit.css";
import { RSButton } from "reactsymbols-kit";
// import mapboxgl from "mapbox-gl";
import Home from "./Home";
import Dashboard from "./components/Dashboard";
import Buy from "./components/Buy";
import Gift from "./components/Gift";
import Earn from "./components/Earn";
import MyBackpack from "./components/MyBackpack";
import Spend from "./components/Spend";
import HomepageLayout from "./components/HomepageLayout";
import Book from "./components/Book";
import Login from "./components/Login";
// import Carousel from './components/Carousel';

import auth0 from 'auth0-js';
import Auth from "./Auth/Auth.js";

import "./App.css";
import Logo from "./images/bp.png";
import ReactGA from "react-ga";
import SocialButton from "./components/SocialButton";
import InstagramLogin from "react-instagram-login";
ReactGA.initialize("UA-112995308-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const responseInstagram = response => {
  console.log(response);
};

const handleSocialLogin = user => {
  console.log(user);
};

const handleSocialLoginFailure = err => {
  console.error(err);
};

// const pStyle = {
//   fontSize: "55px",
//   textAlign: "center",
//   width: "100vw",
//   height: "30vh"
// };
// const socialB = {
//   width: "250px",
//   height: "40px"
// };
// const bPoints = {
//   fontSize: "55px",
//   textAlign: "center",
//   paddingTop: "30px",
//   paddingBottom: "30px",
//   textAlign: "center"
// };

// const centerButtons = {
//   textAlign: "center"
// };

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <BrowserRouter> */}
          <HomepageLayout />
           
          {/* </BrowserRouter> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
