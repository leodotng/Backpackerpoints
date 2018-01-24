import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import "reactsymbols-kit/ReactSymbolsKit.css";
import { RSButton } from "reactsymbols-kit";
// import mapboxgl from "mapbox-gl";
import Home from "./Home";
import Box from './components/Box';
import './App.css';
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

        <div className="Button-align">
          <RSButton value="Buy Points" background="Orange" />
        
          <RSButton value="Earn Points" background="Orange" />
        
          <RSButton value="Gift Points" background="Orange" />
         
          <RSButton value="Book Hostels" />
          
          <RSButton value="Book Adventure Tours" />
         
          <RSButton value="My Digital Backpack" background="Purple" />
          
          <RSButton value="Login" background="Purple" />
          
          <RSButton value="Logout" background="Purple" />
        </div>
        <div>
        <Box />
          </div>
          <div>
            <p>
            Backpackerpoints is a new way to book hostels and adventure tours abroad.

It’s a travel rewards program just for backpackers. Travelers can Buy, Gift, Earn and Spend backpacker points directly out of their digital backpack from our web app. Think credit card mile programs but entirely separate and just for backpackers.

We are partnering with hostels and adventure tours around the world to accept our points and our web app can cash out users on both sides, both backpackers and merchants.
              </p>
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
