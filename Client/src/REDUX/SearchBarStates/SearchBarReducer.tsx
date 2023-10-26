import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    searchedValue:string
} 
const initialState: InitialState = {
    searchedValue:""
}

const SearchBarState = createSlice({
    name: "searchBar",
    initialState,
    reducers: ({
        UpdateSearchValue: (state, { payload }: PayloadAction<string>)=>{
            state.searchedValue = payload;
        }
    })
})

const searchBarReducer = SearchBarState.reducer;
const { UpdateSearchValue } = SearchBarState.actions;

export {
    searchBarReducer,
    UpdateSearchValue
}