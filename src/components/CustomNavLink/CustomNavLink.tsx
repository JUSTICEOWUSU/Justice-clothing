import React from "react";
import style from "./CustomNavLink.module.css";
import { NavLink } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {storeType} from "../../REDUX/ReduxStore/ReduxStore"
import {showOrHideNav} from "../../REDUX/NavbarStates/NavbarReducer"


type Toggle = (event: React.MouseEvent<HTMLElement>) => void;

type NavLinkDataTypes = {
  destination: string;
  content: string;
};

function CustomNavLink({
  destination,
  content,
}: NavLinkDataTypes): JSX.Element {

  const {showAndHideNav} = useSelector((state:storeType)=>state.navBarState);

  const dispatch = useDispatch()

  const respondToToggle:Toggle = ()=>{
    if(showAndHideNav) dispatch(showOrHideNav(""))
    else dispatch(showOrHideNav("showNav"))
  }
  return (
    <span className={style.navLinkContainer}>
      <NavLink to={destination} onClick={respondToToggle}> {content} </NavLink>
    </span>
  );
}

export default CustomNavLink;
