// import StripeCheckout from "react-stripe-checkout";
import React from 'react'

export default function StripeCheckOutButton() {
  return (
    <div>StripeCheckOutButton</div>
  )
}


// const StripeCheckoutButton = ({price}:{price:number})=>{
//     const stripeBill = price * 100;
//     const key = "pk_test_51Lri7JDA0FzgZ7oIEORLHN5I2oHRSJ3VCD4gIqAw4xFRczWTuwhG2J4UzQniRmb12KYe9FFv295aHnUNAQZW1yXC00yQ7hueCZ";
//     // const onToken = (token: stripe.Token):void =>{
//     //     console.log(token);
//     // }
//     return(
//         <StripeCheckout
//             label="Make Payment"
//             name="JUSTICE Clothing Ltd."
//             description={`Your total is $${price}`}
//             image="https://svgshare.com/i/CUz.svg"
//             billingAddress
//             shippingAddress
//             bitcoin
//             amount={stripeBill}
//             panelLabel="Pay Now"
//             stripeKey={key}
//             // token={onToken}

//         />
//     )
// }

// export default StripeCheckoutButton