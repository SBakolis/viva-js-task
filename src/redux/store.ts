import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import couponReducer from "./slices/couponSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    coupons: couponReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
