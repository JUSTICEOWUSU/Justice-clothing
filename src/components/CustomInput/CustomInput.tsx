import React from "react";
import style from ".CustomInput.module.css";
import InputPropsTypes from "../componentsTypes/CustomInpuTypes";

function CustomInput({
  type,
  value,
  blur,
  onfocus,
  onchange,
  label,
}: InputPropsTypes): JSX.Element {
  return (
    <span className={`${style.btnContainer} `}>
      <span className={`${style.label} ${style[blur]}`}>{label}</span>
      <input
        className={style.input}
        type={type}
        onFocus={onfocus}
        value={value}
        onChange={onchange}
      />
    </span>
  );
}

export default CustomInput;
