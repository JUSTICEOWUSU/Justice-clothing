import style from "./CartSectionalComponent.module.css";
import StoreCard from "../../Cards/StoreCard/StoreCard";

function CartSectionalComponent():JSX.Element {
  return (
    <>
    <div className={`container row overflow-hidden gx-5 ${style.itemContainer}`}>
      <div className={`row col-6 overflow-hidden gx-3 ${style.evenStyle}`}>
        <StoreCard width="col-6" cartCard="cartCard" imageUrl='https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png' />

        <div className={`col-6 ${style.evenStyle}` }>
          <span>description</span>
        </div>
      </div>

      <div className={`row col-6 gx-2 overflow-hidden`}>
        <div className={`col-4 ${style.evenStyle}`}>
          <span>description</span>
        </div>

        <div className={`col-4 ${style.evenStyle}`}>
          <span>description</span>
        </div>

        <div className={`col-4 ${style.evenStyle}`}>
          <span>description</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default CartSectionalComponent;
