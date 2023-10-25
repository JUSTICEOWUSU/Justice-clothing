import React from "react";
import style from "./SignInForms.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

// Custom Google Button Style
const GStyle: React.CSSProperties = {
  color:"#000",
  background:"#fff",
  fontSize:"14px",
  margin:"2px 0",
};

// Custom Facebook Button Style
const TStyle:React.CSSProperties = {
  background: "#1DA1F2",
  fontSize: "14px",
  margin: " 2px 0",
};

// Custom Facebook Button Style
const FStyle:React.CSSProperties = {
  background: "#4267B2",
  fontSize: "14px",
  margin: " 2px 0",
};

// Main Sign In form
function SignInForms(): JSX.Element {
  const [blur, setBlur] = useState("");
  const onFocus = () => {
    setBlur("blur");
  };

  const respondToSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setBlur("");
  };

  return (
    <div className={`${style.signInCont}`}>
      <h2 className={style.FormTitle}>Welcome Back</h2>
      <span className={` ${style.buttonsCont}`}>
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
          text={"sign in with twitter"}
          checkout="link"
          btnStyle={TStyle}
          child={<AiOutlineTwitter />}
          />
      </span>
    </div>
  );
}

export default SignInForms;