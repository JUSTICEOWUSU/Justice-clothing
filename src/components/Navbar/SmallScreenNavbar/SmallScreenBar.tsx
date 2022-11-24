import style from "./SmallScreenBar.module.css"
import { SmallScreenPropsTypes } from "../../componentsTypes/SmallScreenTypes"

function SmallScreenBar({onclick}:SmallScreenPropsTypes):JSX.Element {
  return (
    <div className={`${style.smallScreenBarCont} container-fluid`}>
        <span className={style.logoContainer}>logo</span>
        
        <span className={`${style.toggleCont} d-flex`}>
            <span className={style.toggleItem}>bag</span>
            <span className={style.toggleItem} onClick={onclick}>toggle</span>
        </span>
    </div>
  )
}

export default SmallScreenBar