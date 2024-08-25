import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cartSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
