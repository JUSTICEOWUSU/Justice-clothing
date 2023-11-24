import style from "./LargeScreenNavbar.module.css";
import CustomNavLink from "../../CustomNavLink/CustomNavLink";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";
import CartBag from "../../Cart/CartBag/CartBag";
import {Outlet,useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import SearchBar from "../../SearchBar/SearchBar";
import { useLocation } from 'react-router-dom';
import MySVG from '/justice-clothing.svg'
import { useEffect } from "react";
import Cookie from "js-cookie";

import { changeAuthState } from "../../../REDUX/AuthenticationStates/AuthenticationStateReducer";


import { checkAndAuthenticateUser } from "../../Cards/StoreCard/StoreCard";


// Main LargeScreen navigation bar 
function LargeScreenNavbar(): JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()
  const {userIsAuthenticated} = useSelector((state: storeType) => state.authState);
  const dispatch = useDispatch()

  // State Controlling the Visibility of the Large Navigation Bar
  const {showAndHideNav} = useSelector((state:storeType)=>state.navBarState);

  const match = location.pathname.split("/")[1]

  useEffect( () => {
    const jwt = Cookie.get("jwt");
    async function checkUserOnServer(){
        if (jwt) {
          dispatch(changeAuthState(true));
        } else {
          const response = await checkAndAuthenticateUser('unknownUser',`${location.pathname}`);
          
          if(response.isAuthenticated === true){
            Cookie.set('jwt',`${response.token}`,{expires:2, secure:true,path:'/'});
              dispatch(changeAuthState(true));
          }
        }
    }
    
  checkUserOnServer();
  }, []);

  return (
    <>
      <div
        className={`${style.largeNavCont} container-fluid ${style[showAndHideNav]}`}
      >
        <span className={style.logoContainer} onClick={
          ()=>{
            navigate('/')
          }
        }>
          <img
            src={MySVG}
            alt="JUSTICE_CLOTHING LOGO"
            className={`${style.svgImage}`}
          />
        </span>

        <span className={style.navItemsContainer}>
          <CustomNavLink destination={"/"} content={"home"} />
          <CustomNavLink destination={"/shop"} content={"shop"} />
          <CustomNavLink
            destination={"/login"}
            content={userIsAuthenticated ? "SIGN OUT" : "SIGN IN"}
          />
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
