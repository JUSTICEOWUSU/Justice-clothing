import React from "react";
import style from "./CustomInput.module.css";
import InputPropsTypes from "../../Types/CustomInputTypes";

function CustomInput({
  type,
  value,
  blur="",
  onfocus,
  onchange,
  label,
  onblur
}: InputPropsTypes): JSX.Element {
  return (
    <span className={`${style.btnContainer} `}>
      <span className={`${style.label} ${style[blur]}`}>{label}</span>
      <input
        className={style.input}
        type={type}
        onFocus={onfocus}
        onBlur={onblur}
        value={value}
        onChange={onchange}
      />
    </span>
  );
}

export default CustomInput;
