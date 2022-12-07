import React from "react";
import style from "./ShopSection.module.css";
import StoreCard from "../../../components/Cards/StoreCard/StoreCard";
import ShopDataType from "../../../DATA/ShopData";
import { useNavigate } from "react-router-dom";

function ShopSection({
  title,
  items,
  limit,
  routeName
}: ShopDataType): JSX.Element {
  const navigate= useNavigate()

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
                cartCard={

                  index === 3 ? "hideCard":""

                }
                width={"col-lg-3 col-md-4 col-6"}
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
                width={"col-lg-3 col-md-4 col-6"}
              />
              );
          }
        })}
      </div>
      <span className={`${style.moreCont} container`} >
        <span className={style.more} onClick={()=>navigate(routeName)}>more ...</span>
        </span>
    </div>
  );
}

export default ShopSection;
