import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Security, ImplicitCallback } from "@okta/okta-react";
import "reactsymbols-kit/ReactSymbolsKit.css";
import { RSButton } from "reactsymbols-kit";
// import mapboxgl from "mapbox-gl";
import Home from "./Home";
import BuyPoints from "./components/BuyPoints";
import GiftPoints from "./components/GiftPoints";
import EarnPoints from "./components/EarnPoints";
import MyBackpack from "./components/MyBackpack";
import SpendPoints from "./components/SpendPoints";
import Book from "./components/Book";
import Login from "./components/Login";
// import auth0 from 'auth0-js';

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

const pStyle = {
  fontSize: "55px",
  textAlign: "center",
  width: "100vw",
  height: "30vh"
};
const socialB = {
  width: "250px",
  height: "40px"
};
const bPoints = {
  fontSize: "55px",
  textAlign: "center",
  paddingTop: "30px",
  paddingBottom: "30px",
  textAlign: "center"
};

const centerButtons = {
  textAlign: "center"
};

// const config = {
//   issuer: "https://dev-526103.oktapreview.com/oauth2/default",
//   redirect_uri: window.location.origin + "/implicit/callback",
//   client_id: "{0oadqlnatb1TIjCRw0h7}"
// };

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <img src={require("./images/bpack.png")} style={pStyle} />
          </div>
          <h1 style={bPoints}>6,288 Backpacker Points</h1>
          <div className="Button-align" style={centerButtons}>
            <Link to={`/BuyPoints`}>
              <RSButton value="Buy Points" background="Orange" />
            </Link>
            <Link to={`/GiftPoints`}>
              <RSButton value="Gift Points" background="Orange" />
            </Link>
            <Link to={`/EarnPoints`}>
              <RSButton value="Earn Points" background="Orange" />
            </Link>
            <Link to={`/Book`}>
            <RSButton value="Book Hostels" />
            </Link>
            <RSButton value="Book Adventure Tours" />
            

            <Link to={`/MyBackpack`}>
              <RSButton value="My Digital Backpack" background="Purple" />
            </Link>
            <Link to={`/login`}>
              <RSButton value="Login" background="Green" />
            </Link>

            <RSButton value="Logout" background="Green" />
            <br />
            <SocialButton
              provider="facebook"
              appId="178953362706490"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              <img src={require("./images/fb.png")} style={socialB} />
            </SocialButton>
            <SocialButton
              provider="google"
              appId="440198501776-sbtfoml6df7badr0smbeq6gekknedeih.apps.googleusercontent.com"
              onLoginSuccess={handleSocialLogin}
              onLoginFailure={handleSocialLoginFailure}
            >
              <img src={require("./images/google.png")} style={socialB} />
            </SocialButton>
            <br />
            <InstagramLogin
              clientId="fa4d833b7db84483a21b13423af3bac5"
              // buttonText="Login"
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
              style={bPoints}
            />
            {/* <img src={require("./images/instagram.png")} style={socialB} />
          </InstagramLogin> */}
          </div>
          <div>{/* <Box /> */}</div>
          <div>
            <p>
              Backpackerpoints is a new way to book hostels and adventure tours
              abroad. It’s a travel rewards program just for backpackers.
              Travelers can Buy, Gift, Earn and Spend backpacker points directly
              out of their digital backpack from our web app. Think credit card
              mile programs but entirely separate and just for backpackers. We
              are partnering with hostels and adventure tours around the world
              to accept our points and our web app can cash out users on both
              sides, both backpackers and merchants.
            </p>
          </div>

          <Route path="/BuyPoints" component={BuyPoints} />
          <Route path="/GiftPoints" component={GiftPoints} />
          <Route path="/EarnPoints" component={EarnPoints} />
          <Route path="/SpendPoints" component={SpendPoints} />
          <Route path="/MyBackpack" component={MyBackpack} />
          <Route path="/login" component={Login} />
          <Route path="/Book" component={Book} />
        </div>
      </Router>
    );
  }
}

export default App;
