import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// const fixImage = {
//     width: "50px",
//     height: "50px",
//     align: "middle",
//     display: "inline-block"
//   };
  const buttonProperties = {
    width: "120px",
    height: "60px"
  };
  const buttonPropertiesTwo = {
    width: "200px",
    height: "40px"
  };
class BuyPoints extends Component {
    render() {
        return (
                <div>
                    <h1> Buy Points Here </h1>
                    {/* <img src="http://cdn.onlinewebfonts.com/svg/img_549461.png" style={fixImage} /> */}
                    <img src="https://www.doreservices.state.pa.us/images/credit_lg.jpg" style={buttonPropertiesTwo} alt="credit cards" />
                    <img src="http://www.cspdailynews.com/sites/default/files/styles/300_x_225/public/main/articles/chase-pay-300.png?itok=5zJI-isk" alt="chase pay" style={buttonProperties} />
                    <img src="https://woocommerce.com/wp-content/uploads/2016/04/PayPal-Express@2x.png" alt="paypal" style={buttonPropertiesTwo} />
                    <img src="https://maccablo.com/wp-content/uploads/2017/07/Venmo-safe.jpg" alt="venmo" style={buttonProperties} />
                    <p> Buy 100 points $25 </p>
                    <p> Buy 200 points $45 </p>
                    <p> Buy 500 points $100 </p>
                    
                </div>
        )
    }
}
export default BuyPoints;