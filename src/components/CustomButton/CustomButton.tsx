
import style from "./CustomButton.module.css";
import CustomButtonProps from "../../componentsTypes/CustomButtonTypes";

function CustomButton({
  text,
  btnStyle,
  onclick,
  type,
  child,
  checkout=""
}: CustomButtonProps): JSX.Element {
  return (
    <button className={`${style.btn} ${style[checkout]}`} style={btnStyle} onClick={onclick} type={type}>
      {text} {child}
    </button>
  );
}

export default CustomButton;
