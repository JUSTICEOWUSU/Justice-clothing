import React from "react";
import style from "./ShopSection.module.css";
import StoreCard from "../../../components/Cards/StoreCard/StoreCard";
import ShopDataType from "../../../DATA/ShopData";

function ShopSection({
  title,
  items,
  id,
  routeName,
}: ShopDataType): JSX.Element {
  return (
    <div className={`container-fluid ${style.shopSectionCont}`}>
      <h1 className={`${style.sectionTitle}`}>{title}</h1>
      <div className={`container-fluid row g-3 gx-4 overflow-hidden`}>
        {items.map(({ id, name, imageUrl, price }, index) => {
          if (index < 4) {
            return (
              <StoreCard
                key={id}
                name={name}
                imageUrl={imageUrl}
                price={`${price}`}
                width={"col-lg-3 col-md-3 col-6"}
              />
            );
          }
        })}
      </div>
      <span className={style.more}>more...</span>
    </div>
  );
}

export default ShopSection;
