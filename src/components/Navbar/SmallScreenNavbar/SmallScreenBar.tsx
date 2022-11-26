import style from "./SmallScreenBar.module.css"
import { SmallScreenPropsTypes } from "../../../componentsTypes/SmallScreenTypes"
import CartBag from "../../Cart/CartBag/CartBag"
import {HiOutlineBars3} from "react-icons/hi2"

function SmallScreenBar({onclick}:SmallScreenPropsTypes):JSX.Element {
  return (
    <div className={`${style.smallScreenBarCont} container-fluid`}>
        <span className={style.logoContainer}>logo</span>
        
        <span className={`${style.toggleCont} d-flex`}>
            <CartBag/>
            <span className={style.toggleItem} onClick={onclick}><HiOutlineBars3/></span>
        </span>
    </div>
  )
}

export default SmallScreenBar