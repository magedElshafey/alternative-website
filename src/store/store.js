import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
const store = configureStore({
  reducer: {
    authSlice,
  },
});
export default store;
