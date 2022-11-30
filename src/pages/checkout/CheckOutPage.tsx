import React from "react";
import style from "./CheckOutPage.module.css";
// import CartCheckoutItem from "../../components/Cart/CartCheckoutItem/CartCheckoutItem";
import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import CartCheckoutItem from "../../components/Cart/CartCheckoutItem/CartCheckoutItem";
import CustomButton from "../../components/CustomButton/CustomButton";

function CheckOutPage() {
  return (
    <div className={`container-fluid ${style.checkoutPageCont}`}>
      <CartHeader />
      <CartCheckoutItem name="justice" quantity={1} price={20} imageUrl ='https://i.ibb.co/ZYW3VTp/brown-brim.png'/>
      <CartCheckoutItem name="justice" quantity={1} price={20} imageUrl ='https://i.ibb.co/ZYW3VTp/brown-brim.png'/>
      <CartCheckoutItem name="justice" quantity={1} price={20} imageUrl ='https://i.ibb.co/ZYW3VTp/brown-brim.png'/>

      <div className={`container ${style.subsContainer}`}>
        <span className={style.total}>total:$90</span>
      <span className={style.description}>
        {" "}
        *Please pay with the following card details* <br />
        4000 0566 5566 5556 -Exp:01/23-CVV:123
      </span>
        <CustomButton text="Make payment" checkout="checkout"/>
      </div>
      
    </div>
  );
}

export default CheckOutPage;
