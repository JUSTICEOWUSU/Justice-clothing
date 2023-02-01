import React, { ReactNode } from "react";

export default interface CustomButtonProps{
    child?:ReactNode;
    type?:"submit" | "reset" | "button";
    text:string;
    btnStyle?:React.CSSProperties;
    checkout?:string;
    to?:string;
    linkStyle?:React.CSSProperties;
    onclick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
};