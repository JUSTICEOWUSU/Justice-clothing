import style from "./StoreCard.module.css";
import StoreCardProps from "../../../Types/StoreCardTypes";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../REDUX/CartStates/CartReducer";

type click = (event: React.MouseEvent<HTMLButtonElement>) => void;

function StoreCard({
  imageUrl,
  name="",
  price=0,
  width,
  id=0,
  cartCard = "",
}: StoreCardProps) {
  const dispatch = useDispatch();

  const respondToButtonClick: click = () => {
    dispatch(
      addToCart({
        data: {
          id: id,
          name: name,
          imageUrl: imageUrl,
          price: price,
          quantity: 1,
        },
      })
    );
  };

  return (
    <div
      className={`container-fluid ${style.storeCardCont} ${width} ${style[cartCard]}`}
    >
      <div className={`${style.cardItems}`}>
        <img src={imageUrl} alt={imageUrl} className={style.img} />
        <button className={style.cardButton} onClick={respondToButtonClick}>add to cart</button>
      </div>

      <span className={style.itemDescription}>
        <span className={style.itemName}>{name}</span>
        <span className={style.itemPrice}>${price}</span>
      </span>
    </div>
  );
}

export default StoreCard;
