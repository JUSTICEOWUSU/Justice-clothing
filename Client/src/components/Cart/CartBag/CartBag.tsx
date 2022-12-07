import React from "react";
import style from "./CartBag.module.css";
import CartBagBoxProps,{CartBagType} from "../../../Types/CartTypes";
import { FaOpencart } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import StoreCard from "../../Cards/StoreCard/StoreCard";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import { cartBox } from "../../../REDUX/CartStates/CartReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";

// Component for Items inside the CartBox
const CartBoxItem = ({ item, quantity, price,imageUrl}: CartBagBoxProps): JSX.Element => {
  return (
    <div className={`container row ${style.itemsCont}`}>
      <StoreCard
        width="col-4"
        cartCard="cartBoxCard"
        imageUrl={imageUrl}
      />

      <div className={`${style.iDescription} col-8`}>
        <span className={style.itemName}>{item}</span>
        <span className={style.itemPrice}>
          {quantity}
          <IoCloseOutline />${price}
        </span>
      </div>
    </div>
  );
};

// Main CartBag component
function CartBag({screen = ""}: CartBagType): JSX.Element {
  const dispatch = useDispatch();
  const cartClass = useSelector((state: storeType) => state.cartState.cartBox);
  const { cartItems } = useSelector((state: storeType) => state.cartState);
  const navigate = useNavigate();
  const total = cartItems.reduce((acc,{quantity})=>{
      return acc+quantity
  },0)

  // Function responding to the cart bag clicks
  const respondToBagClick = () => {
    if (!cartClass) return dispatch(cartBox("showCartBox"));
    return dispatch(cartBox(""));
  };

  // Function responding to the cartBoxButton clicks
  const respondToButtonClick = () => {
    if (cartClass) dispatch(cartBox(""));
    return navigate("cart");
  };

  return (
    <span
      className={`${style.bagContainer} ${style[screen]}`}
    >
      <FaOpencart className={style.bigBag} onClick={respondToBagClick}/>
      <BsBag className={style.smallBag} onClick={respondToBagClick}/>
      <span className={style.total} onClick={respondToBagClick}> {total} </span>
      <span className={`${style.cartItems} ${style[cartClass]}`}>
        <div className={style.itemsExternalCont}>
          {
            // Mapping element from redux store Cart When not empty
            cartItems.length > 0 &&
              cartItems.map(({ quantity, name, price,imageUrl,id }) => {
                return (
                  <CartBoxItem key={id} quantity={quantity} price={price} item={name} imageUrl={imageUrl}/>
                );
              })
          }

          {cartItems.length == 0 && (
            <span className={style.emptyCart}>Empty cart...</span>
          )}
        </div>
        {cartItems.length > 0 && (
          <CustomButton text={"GO TO CHECKOUT"} checkout={"cartBoxButton"} onclick={respondToButtonClick}/>
        )}
      </span>
    </span>
  );
}

export default CartBag;
