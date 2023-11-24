import style from "./SmallScreenBar.module.css";
import CartBag from "../../Cart/CartBag/CartBag";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import { GiTireIronCross } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { showOrHideNav,showOrHideSearch } from "../../../REDUX/NavbarStates/NavbarReducer";
import { CiSearch } from "react-icons/ci";
import MySVG from "/justice-clothing.svg";


type Toggle = (event: React.MouseEvent<HTMLElement>) => void;

function SmallScreenBar(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showAndHideNav } = useSelector(
    (state: storeType) => state.navBarState
  );

  const respondToToggle: Toggle = () => {
    if (showAndHideNav) dispatch(showOrHideNav(""));
    else dispatch(showOrHideNav("showNav"));
  };

  const respondToSearchClicks = ()=>{
    dispatch(showOrHideSearch())
  }

  return (
    <div className={`${style.smallScreenBarCont} container-fluid`}>
      <span
        className={style.logoContainer}
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src={MySVG}
          alt="JUSTICE_CLOTHING LOGO"
          className={`${style.svgImage}`}
        />
      </span>

      <span className={`${style.toggleCont} d-flex`}>
        <span className={`${style.iconSpan}`} onClick={respondToSearchClicks}>
          <CiSearch className={`${style.searchIcon}`} />
        </span>
        <CartBag />
        <span className={style.toggleItem} onClick={respondToToggle}>
          {!showAndHideNav && <HiOutlineBars3 />}
          {showAndHideNav && <GiTireIronCross />}
        </span>
      </span>
    </div>
  );
}

export default SmallScreenBar;
