import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { cartReducer } from '../CartStates/CartReducer'
import { navbarReducer } from '../NavbarStates/NavbarReducer'
import {searchBarReducer} from '../SearchBarStates/SearchBarReducer'
import { E_CommerceApi } from '../API_Queries/E_CommerceAPI'

const store = configureStore({
    reducer:{
        cartState:cartReducer,
        navBarState: navbarReducer,
        searchBarState:searchBarReducer,
        [E_CommerceApi.reducerPath]:E_CommerceApi.reducer,
    },
    middleware:getDefaultMiddleware({serializableCheck: false}).concat(E_CommerceApi.middleware)
})

export type storeType =  ReturnType<typeof store.getState>

export default store;