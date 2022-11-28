import style from "./SignUpForm.module.css";
import CustomInput from "../../CustomInput/CustomInput";
import CustomButton from "../../CustomButton/CustomButton";

function SignUpForm(): JSX.Element {
  return (
    <div>
      <form className={style.formCont}>
        <CustomInput type={"text"} label={"User name"} />
        <CustomInput type={"email"} label={"email"} />
        <CustomInput type={"password"} label={"password"} />
        <CustomInput type={"password"} label={"confirm password"} />
        <CustomButton type={"submit"} text={"sign up"} />
      </form>
    </div>
  );
}

export default SignUpForm;
