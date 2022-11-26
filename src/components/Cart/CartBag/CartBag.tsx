import React from 'react'
import style from "./CartBag.module.css"
import CartBagProps from '../../../componentsTypes/CartTypes'
import {FaOpencart} from "react-icons/fa"
import {BsBag} from "react-icons/bs"

function CartBag({total}:CartBagProps) {
  return (
    <span className={style.bagContainer}>
        <FaOpencart className={style.bigBag}/>
        <BsBag className={style.smallBag}/>
        <span className={style.total}>0</span>
        <span className={style.cartItems}></span>
    </span>
  )
}

export default CartBag