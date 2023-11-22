import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    userIsAuthenticated:boolean
}

const initialState:InitialState = {
    userIsAuthenticated:false
}

const authState = createSlice({
    name: "oauthStates",
    initialState,
    reducers: {

        changeAuthState: (state, { payload }: PayloadAction<boolean>) => {
            state.userIsAuthenticated = payload;
        }
    }
})

const authReducer = authState.reducer
const { changeAuthState } = authState.actions
export {
    authReducer,
    changeAuthState
}
