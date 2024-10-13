import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import recentlyViewedSlice from "./recentlyViewedSlice";
const store = configureStore({
  reducer: {
    authSlice,
    recentlyViewedSlice,
  },
});
export default store;
