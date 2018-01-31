import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Card, Icon, Image, Segment } from "semantic-ui-react";
import Buy from "./Buy";
import ActivityFeed from "./ActivityFeed";
import GiftPoints from "./GiftPoints";
// import GridRow from "semantic-ui-react/dist/commonjs/collections/Grid/GridRow";
import "./App.css";

const wallPic = require("../images/map.jpg");


const wallPhoto = {
  height: "60vh",
  width: "100vw",
};

class Home extends Component {
  render() {
    return (
          <div>
                      <img src={wallPic} style={wallPhoto} className="backgroundphoto" />
                     
                   </div>
       
    );
  }
}
export default Home;
