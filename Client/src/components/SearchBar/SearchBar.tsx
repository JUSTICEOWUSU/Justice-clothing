import React,{useState} from "react";
import style from "./SearchBar.module.css"
import { CiSearch} from "react-icons/ci"
import {MdClear} from "react-icons/md"
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { storeType } from "../../REDUX/ReduxStore/ReduxStore";
import { UpdateSearchValue} from "../../REDUX/SearchBarStates/SearchBarReducer"

// SEARCH BAR FUNCTIONAL COMPONENT
function SearchBar(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate()
const [inputValue,setInputValue] = useState("");
const {showAndHideSearch} = useSelector((state:storeType) =>state.navBarState)
const respondToChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
  setInputValue(prev=> e.target.value)
}

const clearInput = ()=>{
  return setInputValue(prev=>"")
}

  const respondToSearch = () => {
    dispatch(UpdateSearchValue(`${inputValue}`));
    navigate("shop/search");
  }

  return (
    <div className={`${style[showAndHideSearch]} ${style.searchContainer}`}>
      <input type="text" className={`${style.searchBar} `} value={inputValue} onChange={respondToChange} placeholder="Search..." />
      <span className={`${style.clearSpan}`} onClick={clearInput} ><MdClear/></span>
      <span className={`${style.searchSpan}`} onClick={respondToSearch}><CiSearch/></span>
    </div>
  );
}

export default SearchBar;