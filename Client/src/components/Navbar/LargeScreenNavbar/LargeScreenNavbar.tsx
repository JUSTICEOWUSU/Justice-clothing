import style from "./LargeScreenNavbar.module.css";
import CustomNavLink from "../../CustomNavLink/CustomNavLink";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";
import CartBag from "../../Cart/CartBag/CartBag";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import SearchBar from "../../SearchBar/SearchBar";
import { useLocation } from 'react-router-dom';
import MySVG from '/justice-clothing.svg'
import Cookie from "js-cookie";


// Main LargeScreen navigation bar 
function LargeScreenNavbar(): JSX.Element {
  const location = useLocation()
      const jwt = Cookie.get("jwt");


  // State Controlling the Visibility of the Large Navigation Bar
  const {showAndHideNav} = useSelector((state:storeType)=>state.navBarState);

  const match = location.pathname.split("/")[1]

  return (
    <>
      <div
        className={`${style.largeNavCont} container-fluid ${style[showAndHideNav]}`}
      >
        <span className={style.logoContainer}>
          <img src={MySVG} alt="JUSTICE_CLOTHING LOGO" className={`${style.svgImage}`} />
        </span>

        <span className={style.navItemsContainer}>
          <CustomNavLink destination={"/"} content={"home"} />
          <CustomNavLink destination={"/shop"} content={"shop"} />
          <CustomNavLink destination={"/login"} content={jwt?"SIGN OUT":"SIGN IN"} />
          <CartBag screen={"largeScreen"} />
        </span>
      </div>
      <SmallScreenBar />
      {match !== "login" ? <SearchBar /> : ""}

      <Outlet />
    </>
  );
}

export default LargeScreenNavbar;
