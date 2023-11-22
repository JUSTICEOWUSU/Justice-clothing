import style from "./CustomButton.module.css";
import CustomButtonProps from "../../Types/CustomButtonTypes";

function CustomButton({
  text,
  btnStyle,
  onclick,
  type,
  child,
  to = "",
  linkStyle ,
  checkout=""
}: CustomButtonProps):JSX.Element {
  return (
    <button className={`${style.btn} ${style[checkout]}`} style={btnStyle} onClick={onclick} type={type}>
      <h6  style={linkStyle} className={style.h6}>{text}</h6>
      <span>{text}</span> {child}
    </button>
  );
}

export default CustomButton;
