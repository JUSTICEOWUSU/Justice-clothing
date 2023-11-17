import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = boolean

const initialState:InitialState = false

const authState = createSlice({
    name: "CartStates",
    initialState,
    reducers: {

        changeAuthState: (state, { payload }: PayloadAction<boolean>) => {
            state = payload;
        }
    }
})

const authReducer = authState.reducer
const { changeAuthState } = authState.actions
export {
    authReducer,
    changeAuthState
}
