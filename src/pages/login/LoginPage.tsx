import style from "./LoginPage.module.css"
import SignInForms from "../../components/Forms/SignInForms/SignInForms"
import SignUpForm from "../../components/Forms/SignUpForms/SignUpForm"

function LoginPage():JSX.Element {
  return (
    <div className={`container-fluid row overflow-hidden g-3  gx-5 ${style.loginPageCont}`}>
        <div className="col-lg-6">
            <h2 className={style.formTitle}>I already have an account</h2>
            <span className={style.subTitle}>Sign In with email and password</span>
            <SignInForms/>
        </div>

        <div className={`col-lg-6 ${style.signUp}`}>
            <h2 className={style.formTitle}>I do not have an account</h2>
            <span className={style.subTitle}>Sign up with your mail and password</span>
            <SignUpForm/>
        </div>
    </div>
  )
}

export default LoginPage