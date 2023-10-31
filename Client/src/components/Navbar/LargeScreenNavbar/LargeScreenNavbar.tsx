import style from "./LargeScreenNavbar.module.css";
import { useEffect } from "react";
import CustomNavLink from "../../CustomNavLink/CustomNavLink";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";
import CartBag from "../../Cart/CartBag/CartBag";
import {Outlet} from "react-router-dom"
import {useSelector} from "react-redux"
import {storeType} from  "../../../REDUX/ReduxStore/ReduxStore"
import { useGetAuthStateMutation } from "../../../REDUX/API_Queries/E_CommerceAPI";
import SearchBar from "../../SearchBar/SearchBar";
import { useLocation } from 'react-router-dom';

// Main LargeScreen navigation bar 
function LargeScreenNavbar(): JSX.Element {
  const location = useLocation()

  // State Controlling the Visibility of the Large Navigation Bar
  const {showAndHideNav} = useSelector((state:storeType)=>state.navBarState);

  const match = location.pathname.split("/")[1]

  return (
    <>
    <div className={`${style.largeNavCont} container-fluid ${style[showAndHideNav]}`}>
      <span className={style.logoContainer}>logo</span>

      <span className={style.navItemsContainer}>
        <CustomNavLink destination={"/"} content={"home"} />
        <CustomNavLink destination={"/shop"} content={"shop"} />
        <CustomNavLink destination={"/login"} content={'SIGN IN'} />
        <CartBag screen={"largeScreen"}/>
      </span>
    </div>
    <SmallScreenBar/>
    {
      match !== "login"?(<SearchBar/>):""
    }
    
    <Outlet/>
    </>
  );
}

export default LargeScreenNavbar;
