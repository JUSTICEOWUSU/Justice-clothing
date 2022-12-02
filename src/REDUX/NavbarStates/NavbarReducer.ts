import {createSlice,PayloadAction} from "@reduxjs/toolkit"

type InitialState = {
    showAndHideNav:string
}
const initialState:InitialState = {
    showAndHideNav:""
}

const navbarState = createSlice({
    name:"navbar",
    initialState,
    reducers:{
        showOrHideNav:(state,{payload}:PayloadAction<string>)=>{
            state.showAndHideNav = payload
        }
    }
});

const navbarReducer = navbarState.reducer;
const {showOrHideNav} = navbarState.actions;
export {
    navbarReducer,
    showOrHideNav
}