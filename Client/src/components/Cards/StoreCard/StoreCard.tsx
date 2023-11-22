import style from "./StoreCard.module.css";
import StoreCardProps from "../../../Types/StoreCardTypes";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import { addToCart } from "../../../REDUX/CartStates/CartReducer";
import { Console } from "console";

type click = (event: React.MouseEvent<HTMLButtonElement>) => void;

export async function checkAndAuthenticateUser(data: string, url?: string) {
  try {
    const respond = await fetch(
      "http://localhost:7000/auth/checkUserAuthentication",

      {
        method: "POST",
        redirect: "follow",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ token: data, url }),
      }
    );

    if (!respond.ok) {
      throw new Error(`An Error ocurred Status:${respond.status}`);
    }
    return respond.json();
  } catch (err) {
    console.log(err);
  }
}


function StoreCard({
  imageUrl,
  name = "",
  price = 0,
  width,
  id = 0,
  cartCard = "",
}: StoreCardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {userIsAuthenticated} = useSelector((state: storeType) => state.authState);
  const respondToButtonClick: click = async () => {
    if (!userIsAuthenticated) {
      await checkAndAuthenticateUser("unknownUser",`${location.pathname}`);
        return navigate("/login");
    } 
        console.log(
          "--------------------------------------------isauthenticated"
        );
        console.log(userIsAuthenticated);

    return dispatch(
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
        <button className={style.cardButton} onClick={respondToButtonClick}>
          add to cart
        </button>
      </div>

      <span className={style.itemDescription}>
        <span className={style.itemName}>{name}</span>
        <span className={style.itemPrice}>${price}</span>
      </span>
    </div>
  );
}

export default StoreCard;
