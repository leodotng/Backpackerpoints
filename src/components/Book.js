import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Box from "./Box";
import Gmaps from "./Gmaps";
// import DemoCarousel from "./DemoCarousel";
import { Button, Grid, Card, Icon } from "semantic-ui-react";
import HostelandTourData from "./HostelandTourData";
import Modals from './Modals';

import "./App.css";

const iconSize = {
  width: "13px",
  height: "13px"
};
class Book extends Component {
  render() {
    return (
      <div className="Div-Padding">
        
        <Button basic color="blue">
          <img src={require("../images/backpackicon.png")} style={iconSize} />
          My Backpack 100 Points
        </Button>
        <div>
        <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
        <Card fluid>
            <Card.Content>
            
              <Card.Description>
                <h1> Book Travel </h1>
               
                <HostelandTourData />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="plane" />
                100 Points in your Backpack!
              </a>
            </Card.Content>
          </Card>
        
              
          <Card center fluid>
            <Card.Content>
            
              <Card.Description>
                <h1> Book Travel </h1>
               
                <Gmaps />
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="plane" />
                100 Points in your Backpack!
              </a>
            </Card.Content>
          </Card>
          </Grid.Column>
          </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Book;
