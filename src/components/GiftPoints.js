import React, { Component } from "react";
import StripePaymentButton from "./StripePaymentButton";
import CheckboxExampleRadioGroup from "./CheckboxExampleRadioGroup";
import { Card, Icon, Image } from "semantic-ui-react";
import "./App.css";


const buttonPropertiesTwo = {
  width: "200px",
  height: "40px"
};
const txtWhite = {
  color: "white",
  alignSelf: "center"
};

const wideCard = {
  width: "1250px"
};
class GiftPoints extends Component {
  render() {
    return (
      <div>

        <Card>
          <Card.Content>
            <Card.Header>Gift or Send Points</Card.Header>
            <Card.Meta />
            <Card.Description>
              <CheckboxExampleRadioGroup style={txtWhite} />
              {/* <img src="http://cdn.onlinewebfonts.com/svg/img_549461.png" style={fixImage} /> */}
              {/* <img src="https://www.doreservices.state.pa.us/images/credit_lg.jpg" style={buttonPropertiesTwo} alt="credit cards" />
                    <br /> */}
              <StripePaymentButton />
            </Card.Description>
          </Card.Content>
          <Card.Content extra />
        </Card>
      </div>
    );
  }
}
export default GiftPoints;
