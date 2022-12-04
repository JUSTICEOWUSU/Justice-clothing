import React from "react";
import style from "./ShopSection.module.css";
import StoreCard from "../../../components/Cards/StoreCard/StoreCard";
import ShopDataType from "../../../DATA/ShopData";

function ShopSection({
  title,
  items,
  limit
}: ShopDataType): JSX.Element {
  return (
    <div className={`container-fluid ${style.shopSectionCont}`}>
      <h1 className={`${style.sectionTitle}`}>{title}</h1>
      <div className={`container-fluid row  overflow-hidden`}>
        {items.map(({ id, name, imageUrl, price }, index) => {
          if (limit && index < limit) {
            return (
              <StoreCard
                key={id}
                name={name}
                id={id}
                imageUrl={imageUrl}
                price={price}
                width={"col-lg-3 col-md-3 col-6"}
              />
            );
          }else if(!limit){
            return (
              <StoreCard
                key={id}
                name={name}
                id={id}
                imageUrl={imageUrl}
                price={price}
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
