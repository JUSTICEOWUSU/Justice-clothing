import React from 'react'
import style from "./HeroCard.module.css"
import HeroCardProps from '../../../Types/HeroCardTypes'
import {NavigateFunction, useNavigate} from "react-router-dom"

function HeroCard({title, imageUrl, linkUrl, size= "",styles,last=""}:HeroCardProps) {
  const navigate:NavigateFunction = useNavigate();

  const respondToClick:(event: React.MouseEvent<HTMLElement>) => void = ()=>{
    navigate(linkUrl);
  }
  return (
    <div className={`container-fluid ${style.heroCardCont} ${styles} ${style[size]} ${style[last]}`}>
        <div className={`${style.cardItems}`}>
            <img src={imageUrl} alt={imageUrl} className={style.img} />
            <span className={style.cardDescription} onClick={respondToClick}>
                <span className={style.descriptionTitle}>{title}</span>
                <span className={style.descriptionSub}>shop now</span>
            </span>
        </div>
    </div>
  )
}

export default HeroCard