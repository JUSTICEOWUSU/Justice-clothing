import React from "react";
import style from "./CartBag.module.css";
import CartBagProps from "../../../Types/CartTypes";
import { FaOpencart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import StoreCard from "../../Cards/StoreCard/StoreCard";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import { cartBox } from "../../../REDUX/CartStates/CartReducer";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../CustomButton/CustomButton";


const CartBoxItem = ():JSX.Element=>{
  return(
    <div className={`container row ${style.itemsCont}`}>
    <StoreCard
      width="col-5"
      cartCard="cartBoxCard"
      imageUrl={"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png"}
    />
    <div className={`${style.iDescription} col-7`}>
      <span className={style.itemName}>justice</span>
      <span className={style.itemPrice}>
        2<IoCloseOutline />
        $30
      </span>
    </div>
  </div>
  )
}

function CartBag({ total, screen = "" }: CartBagProps): JSX.Element {
  const dispatch = useDispatch();
  const cartClass = useSelector((state: storeType) => state.cartState.cartBox);
  const {cartItems} = useSelector((state:storeType)=>state.cartState)

  const respondToBagClick = () => {
    if (!cartClass) return dispatch(cartBox("showCartBox"));
    return dispatch(cartBox(""));
  };

  return (
    <span
      className={`${style.bagContainer} ${style[screen]}`}
      onClick={respondToBagClick}
    >
      <FaOpencart className={style.bigBag} />
      <BsBag className={style.smallBag} />
      <span className={style.total}>0</span>
      <span className={`${style.cartItems} ${style[cartClass]}`}>
        <div className={style.itemsExternalCont}>
        {cartItems.length>0 && <CartBoxItem/>}
        {cartItems.length==0 && <span className={style.emptyCart}>Empty cart...</span>} 
        </div>
        {cartItems.length>0 && <CustomButton text={"GO TO CHECKOUT"} checkout={"cartBoxButton"} />}
      </span>
    </span>
  );
}

export default CartBag;
