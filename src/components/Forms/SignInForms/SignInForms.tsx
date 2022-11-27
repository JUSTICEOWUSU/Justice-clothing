import React from "react";
import style from "./SignInForms.module.css";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import {CiFacebook} from "react-icons/ci";
import {AiOutlineTwitter} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";

function SignInForms():JSX.Element {
  return (
    <div className={`${style.signInFormCont} container-fluid row overflow-hidden`}>
      <form col-8>
        <CustomInput type={"email"} value={""} label={"email"} />
        <CustomInput type={"password"} value={""} label={"password"} />
        <CustomButton type={"submit"} text={"sign in"}/>
      </form>

      <span className={`col-4 ${style.buttonsCont}`}>
        <CustomButton text={"sign in with google"} btnStyle={{color:"#000", border:"1px solid #000"}} child={<FcGoogle/>} />
        <CustomButton text={"sign in with facebook"} btnStyle={{background:"4267B2"}} child={<CiFacebook/>} />
        <CustomButton text={"sign in with twitter"} btnStyle={{background:"#1DA1F2"}} child={<AiOutlineTwitter/>} />
      </span>
    </div>
  );
}

export default SignInForms;
