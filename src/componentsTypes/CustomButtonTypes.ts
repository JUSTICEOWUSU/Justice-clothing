
export default interface CustomButtonProps{
    text:string;
    btnStyle?:React.CSSProperties;
    onclick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}