import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Cart, CartItem } from "../types";

const initialState: Cart = {
  items: [],
};

const exists = (cart: Cart, cartItem: PayloadAction<CartItem>) => {
  //Cant use id because the id of the last 3 items is the same :(
  const index = cart.items.findIndex(
    (item) => item.name === cartItem.payload.name
  );
  return index;
};

export const cartSlice = createSlice({
  name: "cart",

  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const index = exists(state, action);
      if (index > -1) {
        state.items[index].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const index = exists(state, action);
      if (index > -1) {
        state.items[index].quantity -=
          action.payload.quantity >= 0
            ? (state.items[index].quantity -= action.payload.quantity)
            : (state.items[index].quantity = 0);
      }
    },

    clear: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;

export default cartSlice.reducer;
