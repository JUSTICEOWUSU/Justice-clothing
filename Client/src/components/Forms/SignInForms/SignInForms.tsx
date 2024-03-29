import React from "react";
import style from "./SignInForms.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { storeType } from "../../../REDUX/ReduxStore/ReduxStore";
import { FaXTwitter } from "react-icons/fa6";
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
   const respond = await fetch("/auth/logout", {
     method: "GET",
     credentials: "include",
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
  const {userIsAuthenticated}  = useSelector(
      (state: storeType) => state.authState
    );

  const navigate = useNavigate()
  
  async function respondToLogout() {
    const respond = await respondToLogoutRequest();
    if (respond.logOut) {

      Cookie.remove("jwt");
      dispatch(changeAuthState(false))
      return navigate("/");
    }
  }
  return (
    <div className={`${style.signInCont}`}>
      <h2 className={style.FormTitle}>
        {userIsAuthenticated ? "SignOut Here " : "Welcome"}
      </h2>
      <span className={` ${style.buttonsCont}`}>
        {userIsAuthenticated ? (
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
              onclick={() => {
                window.location.href = "/auth/google";
              }}
            />

            <CustomButton
              text={"sign in with facebook"}
              checkout="link"
              btnStyle={FStyle}
              child={<CiFacebook />}
              onclick={() => {
                window.location.href = "/auth/facebook";
              }}
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