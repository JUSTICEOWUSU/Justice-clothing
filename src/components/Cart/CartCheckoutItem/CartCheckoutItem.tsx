import style from "./CartCheckoutItem.module.css";
import StoreCard from "../../Cards/StoreCard/StoreCard";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import CheckOutItemPropType from "../../../componentsTypes/CartCheckoutItem";

function CartCheckoutItem({
  imageUrl,
  name,
  quantity,
  price,
}: CheckOutItemPropType): JSX.Element {
  return (
    <div
      className={`container row overflow-hidden gx-lg-5 ${style.itemContainer}`}
    >
      <div className={`row col-6 overflow-hidden gx-sm-0 ${style.evenStyle}`}>
        <StoreCard width="col-6" cartCard="cartCard" imageUrl={imageUrl} />

        <div className={`col-6 ${style.evenStyle}`}>
          <span className={style.itemDetails}>{name}</span>
        </div>
      </div>

      <div className={`row col-6 gx-2 overflow-hidden`}>
        <div className={`col-4 ${style.evenStyle}`}>
          <span className={style.itemPrice}>
            <IoIosArrowBack className={style.itemIcon} /> {quantity}{" "}
            <IoIosArrowForward className={style.itemIcon} />
          </span>
        </div>

        <div className={`col-4 ${style.evenStyle}`}>
          <span className={style.itemDetails}>${price}</span>
        </div>

        <div className={`col-4 ${style.evenStyle}`}>
          <span className={style.itemDetails}>
            <FaTimes />
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartCheckoutItem;
