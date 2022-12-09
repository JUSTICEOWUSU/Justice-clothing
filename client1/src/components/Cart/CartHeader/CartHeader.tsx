import React from "react";
import style from "./CartHeader.module.css";

function CartHeader():JSX.Element {
  return (
    <>
    <div className={`container row overflow-hidden ${style.headerCont} gx-lg-5 gx-sm-0`}>
      <div className={`row col-6 overflow-hidden gx-sm-0 ${style.rowsCont}`}>
        <div className={`col-6 ${style.evenStyle}`}>
            <span>Product</span>
        </div>
        <div className={`col-6 ${style.evenStyle}`}>
            <span>Description</span>
        </div>
      </div>

      <div className={`row col-6 gx-2 overflow-hidden gx-sm-0 ${style.rowsCont}`}>
        <div className={`col-4 ${style.evenStyle}`}>
            <span>Quantity</span>
        </div>
        <div className={`col-4 ${style.evenStyle}`}>
            <span>Price</span>
        </div>
        <div className={`col-4 ${style.evenStyle}`}>
            <span>Remove</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartHeader;
