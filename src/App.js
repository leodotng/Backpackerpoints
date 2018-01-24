import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import "reactsymbols-kit/ReactSymbolsKit.css";
import { RSButton } from "reactsymbols-kit";
// import mapboxgl from "mapbox-gl";
import Home from "./Home";
import Box from './components/Box';
import "./App.css";
import Logo from "./images/bp.png";
import ReactGA from "react-ga";
ReactGA.initialize("UA-112995308-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const pStyle = {
  fontSize: "15px",
  textAlign: "center"
};

const config = {
  issuer: "https://dev-526103.oktapreview.com/oauth2/default",
  redirect_uri: window.location.origin + "/implicit/callback",
  client_id: "{0oadqlnatb1TIjCRw0h7}"
};

class App extends Component {
  
  render() {
    return (
      <div>
        <div>
          <img src={require("./images/bp.png")} style={pStyle} />
          
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div>
        <Box />
          </div>
          

        <div className="Button-align">
          <RSButton value="Buy Points" background="Orange" />
          <br />
          <RSButton value="Earn Points" background="Orange" />
          <br />
          <RSButton value="Gift Points" background="Orange" />
          <br />
          <RSButton value="Book Hostels" />
          <br />
          <RSButton value="Book Adventure Tours" />
          <br />
          <RSButton value="My Digital Backpack" background="Purple" />
          <br />
          <RSButton value="Login" background="Purple" />
          <br />
          <RSButton value="Logout" background="Purple" />
        </div>
        
        {/* <Router>
        <Security issuer={config.issuer}
                  client_id={config.client_id}
                  redirect_uri={config.redirect_uri}
        >
        <Route path='/' exact={true} component={Home}/>
        <Route path='/implicit/callback' component={ImplicitCallback}/>
        </Security>
      </Router> */}
      </div>
    );
  }
}

export default App;
