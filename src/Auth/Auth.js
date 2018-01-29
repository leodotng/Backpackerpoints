// src/Auth/Auth.js
import React, { Component } from "react";
import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'backpackerpoints.auth0.com',
    clientID: 'LnNnOL1q8LPO621cwf3xCkgAWpsStFb5',
    redirectUri: 'http://localhost:3000/',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://backpackerpoints.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}