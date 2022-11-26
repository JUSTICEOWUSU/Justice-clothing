import React from "react";
import style from "./CustomButton.module.css";
import CustomButtonProps from "../../componentsTypes/CustomButtonTypes";

function CustomButton({
  text,
  btnStyle,
  onclick,
}: CustomButtonProps): JSX.Element {
  return (
    <button className={`${style.btn}}`} style={btnStyle} onClick={onclick}>
      {text}
    </button>
  );
}

export default CustomButton;
