import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { cartReducer } from '../CartStates/CartReducer'
import { navbarReducer } from '../NavbarStates/NavbarReducer'
import { searchBarReducer } from '../SearchBarStates/SearchBarReducer'
import { authReducer } from '../AuthenticationStates/AuthenticationStateReducer';
import { E_CommerceApi } from '../API_Queries/E_CommerceAPI'


// type RootState = {
//   cartState: ReturnType<typeof cartReducer>;
//   navBarState: ReturnType<typeof navbarReducer>;
//   searchBarState: ReturnType<typeof searchBarReducer>;
//   authState: ReturnType<typeof authReducer>;
//   [E_CommerceApi.reducerPath]: ReturnType<typeof E_CommerceApi.reducer>;
// };

const store = configureStore({
    reducer:{
        cartState:cartReducer,
        navBarState: navbarReducer,
        searchBarState: searchBarReducer,
        authState:authReducer,
        [E_CommerceApi.reducerPath]:E_CommerceApi.reducer,
    },
    middleware:getDefaultMiddleware({serializableCheck: false}).concat(E_CommerceApi.middleware)
})

export type storeType =  ReturnType<typeof store.getState>

export default store;