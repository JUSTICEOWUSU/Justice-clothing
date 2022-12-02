import React from "react";
import style from "./SignInForms.module.css";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import {CiFacebook} from "react-icons/ci";
import {AiOutlineTwitter} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {useState} from "react";

function SignInForms():JSX.Element {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>):void=>{
    setEmail(prev =>{
      return e.target.value
    })
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>):void=>{
    setPassword(prev =>{
      return e.target.value
    })
  }

  const respondToSubmit=(e:React.ChangeEvent<HTMLButtonElement>):void=>{
      e.preventDefault();
      setEmail("")
      setPassword("")
  }

  return (
    <div className={`${style.signInFormCont} row gx-3`}>
      <form className={"col-8"}>
        <CustomInput type={"email"}  label={"email"} value={email} onchange={onEmailChange}/>
        <CustomInput type={"password"} label={"password"} value={password} onchange={onPasswordChange}/>
        <CustomButton type={"submit"} text={"sign in"}/>
      </form>

      <span className={`col-4 ${style.buttonsCont}`}>
        <CustomButton text={"sign in with google"} btnStyle={{color:"#000",background:"#fff",fontSize:"14px",margin:" 2px 0"}} child={<FcGoogle/>} />
        <CustomButton text={"sign in with twitter"} btnStyle={{background:"#1DA1F2",fontSize:"14px",margin:" 2px 0"}} child={<AiOutlineTwitter/>} />
        <CustomButton text={"sign in with facebook"} btnStyle={{background:"#4267B2",fontSize:"14px",margin:" 2px 0"}} child={<CiFacebook/>} />
      </span>
    </div>
  );
}

export default SignInForms;
