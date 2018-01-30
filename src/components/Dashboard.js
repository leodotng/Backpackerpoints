import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import GridRow from "semantic-ui-react/dist/commonjs/collections/Grid/GridRow";

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
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
            <Grid.Row>
          <Card>
            <Card.Content>
              <Card.Header>Josh</Card.Header>
              <Card.Meta>
                <span className="date">Backpacker since 2018</span>
              </Card.Meta>
              <Card.Description>
                <h1> Dashboard </h1>
                <img src={dash} style={dashBoard} />
                {/* <img src="http://cdn.onlinewebfonts.com/svg/img_549461.png" style={fixImage} /> */}
                {/* <img src="https://www.doreservices.state.pa.us/images/credit_lg.jpg" style={buttonPropertiesTwo} />
                    <img src="http://www.cspdailynews.com/sites/default/files/styles/300_x_225/public/main/articles/chase-pay-300.png?itok=5zJI-isk" style={buttonProperties} />
                    <img src="https://woocommerce.com/wp-content/uploads/2016/04/PayPal-Express@2x.png" style={buttonPropertiesTwo} />
                    <img src="https://maccablo.com/wp-content/uploads/2017/07/Venmo-safe.jpg" style={buttonProperties} /> */}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                6,288 Points in your Backpack!
              </a>
            </Card.Content>
          </Card>
          </Grid.Row>
        </div>
      </div>
    );
  }
}
export default Dashboard;
