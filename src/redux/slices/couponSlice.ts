import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

export const couponReducer = createSlice({
  name: "coupons",

  initialState,
  reducers: {
    applyCoupon: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { applyCoupon } = couponReducer.actions;

export default couponReducer.reducer;
