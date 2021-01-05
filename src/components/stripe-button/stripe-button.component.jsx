import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_HZm5p6e5r5dEOt8eAVsVrbWM00HIfPNfMP";

  const handleToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={handleToken}
        stripeKey={publishableKey}
      />
    </div>
  );
}

export default StripeCheckoutButton;
