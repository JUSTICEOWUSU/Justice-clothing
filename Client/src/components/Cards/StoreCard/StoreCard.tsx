import style from "./StoreCard.module.css";
import StoreCardProps from "../../../Types/StoreCardTypes";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { changeAuthState } from "../../../REDUX/AuthenticationStates/AuthenticationStateReducer";

import { addToCart } from "../../../REDUX/CartStates/CartReducer";
// import { useGetAuthStateMutation } from "../../../REDUX/API_Queries/E_CommerceAPI";
import Cookie from "js-cookie";

type click = (event: React.MouseEvent<HTMLButtonElement>) => void;

export async function checkAndAuthenticateUser(data: string,url?:string) {

  try {
    const respond = await fetch(
     
      "http://localhost:7000/auth/checkUserAuthentication",
     
      {
       
       method: "POST",
       redirect:"follow",
       headers: {
         "content-type": "application/json",
       },
        body: JSON.stringify({ token: data, url }),
       
     }
   );
    
    if (!respond.ok) {
      throw new Error( `An Error ocurred Status:${respond.status}`)
    }
    return respond.json()
  }catch(err){
    console.log(err)
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
  const location = useLocation().pathname.split("/")
  const loc= location[location.length-1]
  

  const  respondToButtonClick: click =  async() => {
    const jwt = Cookie.get("jwt");
    if (jwt) {

      const respond = await checkAndAuthenticateUser(jwt)
      Cookie.set("jwt", respond, {
        secure: true,
        sameSite: "strict",
        expires: 7,
      });
      
    } else {

      const respond = await checkAndAuthenticateUser("unAuthenticated", loc);
      
      if (!respond.isAuthenticated) {

        return navigate("/login")

      } else {

         Cookie.set("jwt", respond, {
           secure: true,
           sameSite: "strict",
           expires: 7,
         });
        
              dispatch(changeAuthState(true));

      }
      } 
    

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
