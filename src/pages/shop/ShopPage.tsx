import React from 'react'
import style from "./ShopPage.module.css"
import { Mens,Women,Sneakers,Jackets,Hats} from "../../DATA/ShopData"
import ShopSection from './ShopPageSections/ShopSection'

function ShopPage():JSX.Element {
  return (
    <div className={`container mx-auto ${style.shopPageCont}`}>
        <ShopSection {...Hats}/>
        <ShopSection {...Mens}/>
        <ShopSection {...Jackets}/>
        <ShopSection {...Women}/>
        <ShopSection {...Sneakers}/>
    </div>
  )
}

export default ShopPage