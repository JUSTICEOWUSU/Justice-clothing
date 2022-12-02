import style from "./SmallScreenBar.module.css"
import CartBag from "../../Cart/CartBag/CartBag"
import {HiOutlineBars3} from "react-icons/hi2"
import {useSelector,useDispatch} from "react-redux"

import {storeType} from "../../../REDUX/ReduxStore/ReduxStore"
import {GiTireIronCross} from "react-icons/gi"
import {showOrHideNav} from "../../../REDUX/NavbarStates/NavbarReducer"


type Toggle = (event: React.MouseEvent<HTMLElement>) => void;

function SmallScreenBar():JSX.Element {
  const dispatch = useDispatch()
  const {showAndHideNav} = useSelector((state:storeType)=>state.navBarState);

  const respondToToggle:Toggle = ()=>{
    if(showAndHideNav) dispatch(showOrHideNav(""))
    else dispatch(showOrHideNav("showNav"))
  }

  return (
    <div className={`${style.smallScreenBarCont} container-fluid`}>
        <span className={style.logoContainer}>logo</span>
        
        <span className={`${style.toggleCont} d-flex`}>
            <CartBag/>
            <span className={style.toggleItem} onClick={respondToToggle}>
              {!showAndHideNav && <HiOutlineBars3/>}
              {showAndHideNav && <GiTireIronCross/>}
              </span>
        </span>
    </div>
  )
}

export default SmallScreenBar