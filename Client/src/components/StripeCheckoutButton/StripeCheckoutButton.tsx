import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../CustomButton/CustomButton";
import {BiCreditCard} from 'react-icons/bi'
import "vite/client"


const StripeCheckoutButton = ({ price }: { price: number }) => {
  const stripeBill = price * 100;
  const onToken = (token: {}) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Make Payment"
      name="JUSTICE Clothing Ltd."
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      billingAddress
      shippingAddress
      bitcoin
      amount={stripeBill}
      panelLabel="Pay Now"
      stripeKey={import.meta.env.VITE_APP_STRIPE_KEY}
      token={onToken}
   >
     <CustomButton text="Make payment" checkout="checkout" child={<BiCreditCard/>} />
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
