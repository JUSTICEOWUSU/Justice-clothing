import React from "react";
import style from "./SignInForms.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import Cookie from "js-cookie";
import {changeAuthState} from "../../../REDUX/AuthenticationStates/AuthenticationStateReducer"
import { useNavigate } from "react-router-dom";

// Custom Google Button Style
const GStyle: React.CSSProperties = {
  color:"#000",
  background:"#fff",
  fontSize:"14px",
  borderRadius:"2px",
  margin: "unset",
};

// Custom Facebook Button Style
const TStyle: React.CSSProperties = {
  background: "#000",
  fontSize: "14px",
  borderRadius: "2px",
  margin: "unset",
};

// Custom Facebook Button Style
const FStyle: React.CSSProperties = {
  background: "#4267B2",
  fontSize: "14px",
  borderRadius: "2px",
  margin: "unset",
};



 async function respondToLogoutRequest() { 
  try {
   const respond = await fetch("http://localhost:7000/auth/logout", {
     method: "GET",
   });
    
    if (!respond.ok) {
      throw new Error( `An Error ocurred Status:${respond.status}`)
    }
    return respond.json()
  }catch(err){
    console.log(err)
  }
}


// Main Sign In form
function SignInForms(): JSX.Element {
  const dispatch = useDispatch();
  const isAuthenticated  = useSelector(
      (state: storeType) => state.authState
    );

  const navigate = useNavigate()
  const [blur, setBlur] = useState("");
  const onFocus = () => {
    setBlur("blur");
  };


  async function respondToLogout() {
    const respond = (await respondToLogoutRequest()) as { logout: boolean };
    if (respond.logout) {
      Cookie.remove("jwt");
      dispatch(changeAuthState(false))
      return navigate("/");
    }
  }

  return (
    <div className={`${style.signInCont}`}>
      <h2 className={style.FormTitle}>
        {isAuthenticated ? "SignOut Here " : "Welcome"}
      </h2>
      <span className={` ${style.buttonsCont}`}>
        {isAuthenticated ? (
          <CustomButton
            text={"SignOut"}
            btnStyle={GStyle}
            linkStyle={{ color: "#000" }}
            checkout="link"
            onclick={respondToLogout}
          />
        ) : (
          <>
            <CustomButton
              text={"sign in with google"}
              btnStyle={GStyle}
              linkStyle={{ color: "#000" }}
              checkout="link"
              child={<FcGoogle />}
              to={"http://localhost:7000/auth/google"}
              />
              
            <CustomButton
              text={"sign in with facebook"}
              checkout="link"
              btnStyle={FStyle}
              child={<CiFacebook />}
              to={"http://localhost:7000/auth/facebook"}
              />
              
            <CustomButton
              text={"sign in with"}
              checkout="link"
              btnStyle={TStyle}
              child={<FaXTwitter />}
            />
          </>
        )}
      </span>
    </div>
  );
}

export default SignInForms;