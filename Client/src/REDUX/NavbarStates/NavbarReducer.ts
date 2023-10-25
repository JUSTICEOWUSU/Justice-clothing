import {createSlice,PayloadAction} from "@reduxjs/toolkit"

export type InitialState = {
    showAndHideNav:string
    showAndHideSearch:string
}
const initialState:InitialState = {
    showAndHideNav:"",
    showAndHideSearch:"",
}

const navbarState = createSlice({
    name:"navbar",
    initialState,
    reducers:{
        showOrHideNav:(state,{payload}:PayloadAction<string>)=>{
            state.showAndHideNav = payload
        },
        showOrHideSearch:(state)=>{
            if(state.showAndHideSearch === ""){
                state.showAndHideSearch = "showAndHideSearch"
            }else{
                state.showAndHideSearch = ""
            }
        }
    }
});

const navbarReducer = navbarState.reducer;
const {showOrHideNav,showOrHideSearch} = navbarState.actions;
export {
    navbarReducer,
    showOrHideNav,
    showOrHideSearch
}