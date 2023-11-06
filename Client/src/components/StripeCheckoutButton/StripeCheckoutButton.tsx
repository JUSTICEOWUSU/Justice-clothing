import React from "react";
import StripeCheckout from "react-stripe-checkout";
import CustomButton from "../CustomButton/CustomButton";
import { BiCreditCard } from 'react-icons/bi';



const StripeCheckoutButton = ({ price }: { price: number }) => {
  const key:string = import.meta.env.VITE_APP_STRIPE_KEY;  
  const stripeBill = price * 100;
  const onToken = (token: {}) => {
    console.log(token);
  };


  return (
    <StripeCheckout
      label="Make Payment"
      name="JUSTICE Clothing Ltd."
      description={`Your total is $${price}`}
      image="/justice-clothing.svg"
      billingAddress
      shippingAddress
      bitcoin
      amount={stripeBill}
      panelLabel="Pay Now"
      stripeKey={key}
      token={onToken}
   >
     <CustomButton text="Make payment" checkout="checkout" child={<BiCreditCard/>} />
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;