import React from "react";
import style from "./LoadingSpinner.module.css"


function LoadingSpinner() {
  return (
    <div className={`${style.spinalPageCont}`}>
        <div className={`${style.loader}`}></div>
    </div>
  )
}

export default LoadingSpinner