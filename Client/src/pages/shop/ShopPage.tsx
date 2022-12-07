import React from "react";
import style from "./ShopPage.module.css";
import { Mens, Women, Sneakers, Jackets, Hats } from "../../DATA/ShopData";
import ShopSection from "./ShopPageSections/ShopSection";

function ShopPage(): JSX.Element {
  return (
    <div className={`container mx-auto ${style.shopPageCont}`}>
      <ShopSection {...Hats} limit={4} />
      <ShopSection {...Mens} limit={4} />
      <ShopSection {...Jackets} limit={4} />
      <ShopSection {...Women} limit={4} />
      <ShopSection {...Sneakers} limit={4} />
    </div>
  );
}

export default ShopPage;
