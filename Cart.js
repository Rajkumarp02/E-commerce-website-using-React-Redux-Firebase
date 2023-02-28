import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const index = state.cart.find(product =>
        product.id === action.payload.id);
      if (index) {
        index.quantity++;
      } else {

        state.cart.push({ ...action.payload, quantity: 1 });

      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      toast.info(" Successfully Removed the Item!", {
        position: 'top-center'
      })
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },


  },

});


export const { addItem, incrementQuantity,
  decrementQuantity,
  removeItem, } = cartSlice.actions;
export default cartSlice.reducer;