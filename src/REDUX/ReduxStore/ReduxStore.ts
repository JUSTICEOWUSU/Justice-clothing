import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from '../CartStates/CartReducer'
import { navbarReducer } from '../NavbarStates/NavbarReducer'

const store = configureStore({
    reducer:{
        cartState:cartReducer,
        navBarState:navbarReducer,
    }
})

export type storeType =  ReturnType<typeof store.getState>

export default store;