import style from "./ShopCategorized.module.css";
import StoreCard from "../../components/Cards/StoreCard/StoreCard";
import {IoArrowForwardOutline,IoArrowBackOutline} from 'react-icons/io5'


function ShopCategorized() {
  return (
    <div className={style.Cont}>
        <h1 className={style.header}>header</h1>
    <div className={`container row overflow-hidden m-auto gx-4 $`}>
      <StoreCard
        name="justice"
        price={20}
        width={"col-3"}
        id={2}
        cartCard={"categorizedCard"}
        imageUrl={"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"}
      />
      <StoreCard
        name="justice"
        price={20}
        width={"col-3"}
        id={2}
        cartCard={"categorizedCard"}
        imageUrl={"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"}
      />
      <StoreCard
        name="justice"
        price={20}
        width={"col-3"}
        id={2}
        cartCard={"categorizedCard"}
        imageUrl={"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"}
      />
      <StoreCard
        name="justice"
        price={20}
        width={"col-3"}
        id={2}
        cartCard={"categorizedCard"}
        imageUrl={"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"}
      />
      <StoreCard
        name="justice"
        price={20}
        width={"col-3"}
        id={2}
        cartCard={"categorizedCard"}
        imageUrl={"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"}
      />
      <StoreCard
        name="justice"
        price={20}
        width={"col-3"}
        id={2}
        cartCard={"categorizedCard"}
        imageUrl={"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png"}
      />
      </div>
      <span className={style.iconsCont}>
        <IoArrowForwardOutline className={style.icon}/>
        <IoArrowBackOutline className={style.icon}/>
      </span>
    </div>
  );
}

export default ShopCategorized;
