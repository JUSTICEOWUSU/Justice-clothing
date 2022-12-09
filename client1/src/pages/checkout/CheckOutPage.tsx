import React from "react";
import style from "./CheckOutPage.module.css";
import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import CartCheckoutItem from "../../components/Cart/CartCheckoutItem/CartCheckoutItem";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useSelector } from "react-redux";
import {storeType} from "../../REDUX/ReduxStore/ReduxStore"
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton";


function CheckOutPage() {
  const { cartItems } = useSelector((state: storeType) => state.cartState);
  const total = cartItems.reduce((acc,{price,quantity})=>{
    return acc + (price*quantity)
  },0)

  return (
    <div className={`container-fluid ${style.checkoutPageCont}`}>
      <CartHeader />
      {
        cartItems.map(({name,quantity,price,imageUrl,id})=>{
          return <CartCheckoutItem key={id} name={name} quantity={quantity} price={price} imageUrl ={imageUrl}/>

        })
      }

      <div className={`container ${style.subsContainer}`}>
        <span className={style.total}>total: ${total}</span>
      <span className={style.description}>
        {" "}
        *Please pay with the following card details* <br />
        4000 0566 5566 5556 -Exp:01/23-CVV:123
      </span>
        <StripeCheckoutButton price={total}/>
      </div>
      
    </div>
  );
}

export default CheckOutPage;
