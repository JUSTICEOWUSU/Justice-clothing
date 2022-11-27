
import style from "./CustomButton.module.css";
import CustomButtonProps from "../../componentsTypes/CustomButtonTypes";

function CustomButton({
  text,
  btnStyle,
  onclick,
  type,
  child
}: CustomButtonProps): JSX.Element {
  return (
    <button className={`${style.btn}}`} style={btnStyle} onClick={onclick} type={type}>
      {text}{child}
    </button>
  );
}

export default CustomButton;
