import style from "./LargeScreenNavbar.module.css";
import CustomNavLink from "../../CustomNavLink/CustomNavLink";
import SmallScreenBar from "../SmallScreenNavbar/SmallScreenBar";

function LargeScreenNavbar(): JSX.Element {
  return (
    <>
    <div className={`${style.largeNavCont} container-fluid`}>
      <span className={style.logoContainer}>logo</span>

      <span className={style.navItemsContainer}>
        <CustomNavLink destination={"/"} content={"home"} />
        <CustomNavLink destination={"/contacts"} content={"shop"} />
        <CustomNavLink destination={"/contacts"} content={"login"} />
        <CustomNavLink destination={"/contacts"} content={"contact us"} />
        <CustomNavLink destination={"/contacts"} content={"contacts"} />
      </span>
    </div>
    <SmallScreenBar/>
    </>
  );
}

export default LargeScreenNavbar;
