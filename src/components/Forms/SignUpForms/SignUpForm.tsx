import style from './SignUpForm/module.css'
import CustomInput from '../../CustomInput/CustomInput'
import CustomButton from '../../CustomButton/CustomButton'

function SignUpForm():JSX.Element {
  return (
    <div>
         <form>
        <CustomInput type={"text"} value={""} label={"User name"} />
        <CustomInput type={"email"} value={""} label={"email"} />
        <CustomInput type={"password"} value={""} label={"password"} />
        <CustomInput type={"text"} value={""} label={"confirm password"} />
        <CustomButton type={"submit"} text={"sign up"}/>
      </form>
    </div>
  )
}

export default SignUpForm