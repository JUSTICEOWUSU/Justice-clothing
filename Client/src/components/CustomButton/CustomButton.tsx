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
      <a href={to} style={linkStyle}>{text}</a>
      <span>{text}</span> {child}
    </button>
  );
}

export default CustomButton;
