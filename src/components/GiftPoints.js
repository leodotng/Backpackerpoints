import React, { Component } from "react";
import StripePaymentButton from './StripePaymentButton';
import CheckboxExampleRadioGroup from './CheckboxExampleRadioGroup';
import { Card, Icon, Image } from 'semantic-ui-react';
import "./App.css";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// const fixImage = {
//     width: "50px",
//     height: "50px",
//     align: "middle",
//     display: "inline-block"
//   };
  
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
  }
class GiftPoints extends Component {
    render() {
        return (
                <div>
                    {/* <h1> Buy Points Here </h1> */}
                    
                    {/* <img src="http://www.cspdailynews.com/sites/default/files/styles/300_x_225/public/main/articles/chase-pay-300.png?itok=5zJI-isk" alt="chase pay" style={buttonProperties} />
                    <img src="https://woocommerce.com/wp-content/uploads/2016/04/PayPal-Express@2x.png" alt="paypal" style={buttonPropertiesTwo} /> */}
                    {/* <img src="https://maccablo.com/wp-content/uploads/2017/07/Venmo-safe.jpg" alt="venmo" style={buttonProperties} /> */}
                   
                   <Card>
                      <Card.Content>
                        <Card.Header>
                          Gift or Send Points
                          </Card.Header>
                          <Card.Meta>
                            
                            </Card.Meta>
                            <Card.Description>
                            <CheckboxExampleRadioGroup style={txtWhite}/>
                    {/* <img src="http://cdn.onlinewebfonts.com/svg/img_549461.png" style={fixImage} /> */}
                    {/* <img src="https://www.doreservices.state.pa.us/images/credit_lg.jpg" style={buttonPropertiesTwo} alt="credit cards" />
                    <br /> */}
                    <StripePaymentButton />
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <a>
                              <Icon name='user' />
                              6,288 Points in your Backpack!
                              </a>
                              </Card.Content>
                              </Card>
                      
                    
                    
                </div>
        )
    }
}
export default GiftPoints;