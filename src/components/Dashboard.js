import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Card, Icon, Image, Segment } from "semantic-ui-react";
import Buy from "./Buy";
import ActivityFeed from "./ActivityFeed";
import GiftPoints from "./GiftPoints";
// import GridRow from "semantic-ui-react/dist/commonjs/collections/Grid/GridRow";

const dash = require("../images/dashboard.png");

const dashBoard = {
  height: "125px",
  width: "150px"
};
const fixImage = {
  width: "50px",
  height: "50px",
  align: "middle",
  display: "inline-block"
};
const buttonProperties = {
  width: "120px",
  height: "60px"
};
const buttonPropertiesTwo = {
  width: "200px",
  height: "40px"
};
const wideCard = {
  width: "100%",
  height: "100%"
}
const cardWidth = {
  width: "400px",
  height: "100%"
}




class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Card.Header>Josh</Card.Header>
                    <Card.Meta>
                      <span className="date">Backpacker since 2018</span>
                    </Card.Meta>
                    <Card.Description>
                      <h1> Dashboard </h1>
                      <img src={dash} style={dashBoard} />
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="user" />
                      6,288 Points in your Backpack!
                    </a>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Buy />
              </Grid.Column>
              <Grid.Column>
                <GiftPoints />
              </Grid.Column>
              <Grid.Column>
                <ActivityFeed />
              </Grid.Column>
              
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Dashboard;
