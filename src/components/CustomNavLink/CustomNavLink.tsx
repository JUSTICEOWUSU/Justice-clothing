import React from "react";
import style from "./CustomNavLink.module.css";
import { NavLink } from "react-router-dom";

type NavLinkDataTypes = {
  destination: string;
  content: string;
};

function CustomNavLink({
  destination,
  content,
}: NavLinkDataTypes): JSX.Element {
  return (
    <span className={style.navLinkContainer}>
      <NavLink to={destination} > {content} </NavLink>
    </span>
  );
}

export default CustomNavLink;
