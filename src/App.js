import React, { Component } from 'react';
import './App.css';
import { Security, ImplicitCallback } from '@okta/okta-react';


const config = {
  issuer: 'https://dev-526103.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{0oadqlnatb1TIjCRw0h7}' 
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Backpackerpoints</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
