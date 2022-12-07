import style from "./SignUpForm.module.css";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";
import { useState } from "react";

// SignUpComponent function
function SignUpForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [blur, setBlur] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail((prev) => {
      return e.target.value;
    });
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName((prev) => {
      return e.target.value;
    });
  };

  const CPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword((prev) => {
      return e.target.value;
    });
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword((prev) => {
      return e.target.value;
    });
  };

  const onFocus = () => {
    setBlur("blur");
  };


  const respondToSubmit=(e:React.MouseEvent<HTMLButtonElement>):void=>{
    e.preventDefault();
    setEmail("")
    setPassword("")
    setName("")
    setConfirmPassword("")
    setBlur("")
}

  return (
    <div>
      <form className={style.formCont}>
        <CustomInput
          type={"text"}
          label={"User name"}
          value={name}
          onfocus={onFocus}
          onchange={onNameChange}
          blur={blur}
        />
        <CustomInput
          type={"email"}
          label={"email"}
          value={email}
          onfocus={onFocus}
          onchange={onEmailChange}
          blur={blur}
        />
        <CustomInput
          type={"password"}
          label={"password"}
          value={password}
          onfocus={onFocus}
          onchange={onPasswordChange}
          blur={blur}
        />
        <CustomInput
          type={"password"}
          label={"confirm password"}
          value={confirmPassword}
          onfocus={onFocus}
          onchange={CPasswordChange}
          blur={blur}
        />
        <CustomButton type={"submit"} text={"sign up"} onclick={respondToSubmit}/>
      </form>
    </div>
  );
}

export default SignUpForm;
