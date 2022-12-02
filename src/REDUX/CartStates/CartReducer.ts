import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type CartItem = {
    id: number;
    name : string;
    imageUrl : string;
    price : number;
    quantity:number;
}

type InitialState = {
    cartBox: string;
    cartItems: CartItem[]
}



const initialState: InitialState = {
    cartBox: "",
    cartItems:[]
};

const cartStates = createSlice({
    name: "CartStates",
    initialState,
    reducers: {

        cartBox: (state, { payload }: PayloadAction<string>) => {
            state.cartBox = payload;
        },

        addToCart: (state, { payload }:PayloadAction<{data:CartItem}>) => {
            const { data } = payload;
            const found = state.cartItems.find(ele => ele["id"] === data["id"]);

            if (found) {
                const index = state.cartItems.indexOf(found);
                state.cartItems[index].quantity++;
            } else {
                const item = Object.assign({}, data)
                item.quantity = 1;
                state.cartItems.push(item);
            }
        },

        increaseItems: (state, { payload }:PayloadAction<{data:CartItem}>) => {
            const { data } = payload;
            const found = state.cartItems.find(ele => ele["id"] === data["id"]);
            if(!found) return
            const index = state.cartItems.indexOf(found);
            state.cartItems[index].quantity = state.cartItems[index].quantity + 1;
        },

        decreaseItems: (state, { payload }:PayloadAction<{data:CartItem}>) => {
            const { data } = payload;
            const found = state.cartItems.find(ele => ele["id"] === data["id"]);
            if(!found) return
            const index = state.cartItems.indexOf(found);
            if (found.quantity === 1) {
                state.cartItems.splice(index, 1);
            } else {
                state.cartItems[index].quantity--;
            }
        },

        removeItem: (state, { payload }:PayloadAction<{data:CartItem}>) => {
            const { data } = payload;
            const found = state.cartItems.find(ele => ele["id"] === data["id"]);
            if(!found) return
            const index = state.cartItems.indexOf(found);
            state.cartItems.splice(index, 1);
        }
    }

})

const cartReducer = cartStates.reducer
const {increaseItems,removeItem,addToCart,cartBox} = cartStates.actions

export {
    cartReducer,
    increaseItems,
    removeItem,
    cartBox,
    addToCart
}