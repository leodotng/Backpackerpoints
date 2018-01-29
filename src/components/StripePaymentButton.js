import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
export default class TakeMoney extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Congratulations on buying your first points!, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_Yu5YVvZ77f0Y8NhzNPSEzol0"
        amount={2500}
        name="Backpackerpoints" // the pop-in header title
  description="Purchase of 100 Backpackerpoints" // the pop-in header subtitle
  image="https://pbs.twimg.com/profile_images/954481161379700736/Y4FygLho_400x400.jpg" // the pop-in header image (default none)
  ComponentClass="div"
  panelLabel="Confirm Purchase"
      />
    )
  }
}