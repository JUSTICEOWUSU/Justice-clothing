import style from "./LargeScreenNavbar.module.css";
import CustomNavLink from "../../CustomNavLink/CustomNavLink";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";
import CartBag from "../../Cart/CartBag/CartBag";
import {Outlet} from "react-router-dom"

function LargeScreenNavbar(): JSX.Element {
  return (
    <>
    <div className={`${style.largeNavCont} container-fluid`}>
      <span className={style.logoContainer}>logo</span>

      <span className={style.navItemsContainer}>
        <CustomNavLink destination={"/"} content={"home"} />
        <CustomNavLink destination={"/shop"} content={"shop"} />
        <CustomNavLink destination={"/contacts"} content={"login"} />
        <CustomNavLink destination={"/contacts"} content={"contact us"} />
        <CartBag/>
      </span>
    </div>
    <SmallScreenBar/>
    <Outlet/>
    </>
  );
}

export default LargeScreenNavbar;
