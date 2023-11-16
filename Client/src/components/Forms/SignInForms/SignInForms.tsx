import React from "react";
import style from "./SignInForms.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Cookie from "js-cookie";
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
   const respond = await fetch(
     "/auth/logout",
     {
       method: "GET",
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


// Main Sign In form
function SignInForms(): JSX.Element {
  const navigate = useNavigate()
  const [blur, setBlur] = useState("");
  const onFocus = () => {
    setBlur("blur");
  };

  async function respondToLogout() {
    const respond = (await respondToLogoutRequest()) as { logout: boolean };
    if (respond.logout) {
      Cookie.remove("jwt");
      return navigate("/");
    }
  }
      const jwt = Cookie.get("jwt");

  return (
    <div className={`${style.signInCont}`}>
      <h2 className={style.FormTitle}>{jwt ? "Welcome Back" : "Welcome"}</h2>
      <span className={` ${style.buttonsCont}`}>
        {"LO" ? (
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
              to={"/auth/google"}
              // onclick={resToGoogle}
            />

            <CustomButton
              text={"sign in with facebook"}
              checkout="link"
              btnStyle={FStyle}
              child={<CiFacebook />}
              to={"/auth/facebook"}
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