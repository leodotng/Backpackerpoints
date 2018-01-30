import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Box from "./Box";
import Gmaps from "./Gmaps";
import DemoCarousel from "./DemoCarousel";
import { Card, Icon, Image } from "semantic-ui-react";
import "./App.css";

// const fixImage = {
//     width: "50px",
//     height: "50px",
//     align: "middle",
//     display: "inline-block"
//   };
//   const formatMap = {
//     width: "450px",
//     height: "450px",
//     align: "middle",
//     display: "inline-block"
//   };

const wideCard = {
    width: "1250px"
  }
class Book extends Component {
  render() {
    return (
      <div>
        <div>{/* <DemoCarousel /> */}</div>
        <div>
          <Card style={wideCard}>
            <Card.Content>
              <Card.Header>Josh</Card.Header>
              <Card.Meta>
                <span className="date">Backpacker since 2018</span>
              </Card.Meta>
              <Card.Description>
                <Gmaps />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                6,288 Points in your Backpack!
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    );
  }
}
export default Book;
