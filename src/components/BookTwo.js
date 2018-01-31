import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Box from "./Box";
import Gmaps from "./Gmaps";
// import DemoCarousel from "./DemoCarousel";
import { Button, Grid, Card, Icon, Segment } from "semantic-ui-react";
import HostelandTourData from "./HostelandTourData";
import Modals from "./Modals";

import "./App.css";

const iconSize = {
  width: "13px",
  height: "13px"
};
class BookTwo extends Component {
  render() {
    return (
      <div className="Div-Padding">
        <Button basic color="blue">
          <img src={require("../images/backpackicon.png")} style={iconSize} />
          My Backpack 78 Points
        </Button>
        <br />
        <br />

        <div>
          <Grid columns="equal">
            <Grid.Column>
              <Segment>
                <Card center fluid>
                  <Card.Content>
                    <Card.Description>
                      <center>
                      <h1> Book Travel </h1>
<HostelandTourData />
                      </center>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra />
                </Card>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Card center fluid>
                  <Card.Content>
                    <Card.Description>
                      <h1> Maps </h1>

                      <Gmaps />
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
export default BookTwo;
