import style from "./LargeScreenNavbar.module.css";
import CustomNavLink from "../../CustomNavLink/CustomNavLink";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";
import CartBag from "../../Cart/CartBag/CartBag";
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux"
import {storeType} from  "../../../REDUX/ReduxStore/ReduxStore"

// Main LargeScreen navigation bar 
function LargeScreenNavbar(): JSX.Element {
  
  // State Controlling the Visibility of the Large Navigation Bar
  const {showAndHideNav} = useSelector((state:storeType)=>state.navBarState);

  return (
    <>
    <div className={`${style.largeNavCont} container-fluid ${style[showAndHideNav]}`}>
      <span className={style.logoContainer}>logo</span>

      <span className={style.navItemsContainer}>
        <CustomNavLink destination={"/"} content={"home"} />
        <CustomNavLink destination={"/shop"} content={"shop"} />
        <CustomNavLink destination={"/login"} content={"login"} />
        <CartBag screen={"largeScreen"}/>
      </span>
    </div>
    <SmallScreenBar/>
    <Outlet/>
    </>
  );
}

export default LargeScreenNavbar;
