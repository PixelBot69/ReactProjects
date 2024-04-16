import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/slice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;