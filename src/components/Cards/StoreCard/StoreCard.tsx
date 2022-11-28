import React from 'react'
import style from "./StoreCard.module.css"

type StoreProps  = {
    imageUrl:string;
    name?:string;
    price?:string;
    width:string;
    cartCard?:string;
}

function StoreCard({imageUrl,name,price,width,cartCard=""}:StoreProps) {
  return (
    <div className={`container-fluid ${style.storeCardCont} ${width} ${style[cartCard]}`}>
        <div className={`${style.cardItems}`}>
            <img src={imageUrl} alt={imageUrl} className={style.img} />
            <button className={style.cardButton}>add to cart</button>
        </div>
        <span className={style.itemDescription}>
            <span className={style.itemName}>{name}</span>
            <span className={style.itemPrice}>${price}</span>
        </span>
    </div>
    )
}

export default StoreCard