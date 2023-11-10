import React from "react";
import style from "./ShopSection.module.css";
import StoreCard from "../../../components/Cards/StoreCard/StoreCard";
import { useNavigate } from "react-router-dom";


export interface ItemsTypes {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface ShopDataType {
  id: number;
  title: string;
  routeName: string;
  items: ItemsTypes[];
  limit?: number;
}


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
      <div className={`container-fluid row  overflow-hidden p-md-0 p-sm-0 p-0 `}>
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
