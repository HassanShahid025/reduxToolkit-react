import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICartitem } from "../../types";


const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk('cart/getCartItems',
 async() => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data
      } catch (error) {
        console.log(error)
        
      }  
})

const initialState = {
  cartItems: <ICartitem[]>[],
  amount: 4,
  total: 0,
  isLoading: true,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem : (state, action) => {
        const id = action.payload
        state.cartItems = state.cartItems.filter((item) => item.id !== id )
    },
    increseItem : (state, {payload}) => {
        const cartItem = state.cartItems.find((item) => item.id === payload)
        if(cartItem){
            cartItem.amount = cartItem.amount + 1
        }
    },
    decreaseItem : (state, {payload}) => {
        const cartItem = state.cartItems.find((item) => item.id === payload)
        if(cartItem){ 
            cartItem.amount = cartItem.amount - 1
        }
    },
    calculateTotals : (state) => {
        let total = 0;
        let amount = 0
        state.cartItems.map((item) => {
            total = total + (item.amount * Number(item.price))
            amount = amount + item.amount 
        })
        state.total = Number(total.toFixed(2))
        state.amount = amount
    }
  },
  extraReducers : (builder) => {
    builder
    .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
    })
    .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
    })
    .addCase(getCartItems.rejected, (state) => {
        state.isLoading = false
    })
  }
});

export const { clearCart, removeItem, decreaseItem, increseItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
