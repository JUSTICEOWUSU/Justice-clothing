import style from "./LoginPage.module.css"
import SignInForms from "../../components/Forms/SignInForms/SignInForms"

function LoginPage():JSX.Element {
  return (
    <div className={`container-fluid  ${style.loginPageCont}`}>
       <SignInForms/>
    </div>
  )
}

export default LoginPage