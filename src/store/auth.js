import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  alternativeLogin: JSON.parse(window.localStorage.getItem("auth")) || false,
  userData: JSON.parse(localStorage.getItem("user")) || null,
  token: JSON.parse(localStorage.getItem("token")) || null,
  alternativeRegester: JSON.parse(window.localStorage.getItem("reg")) || false,
};
const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    handleUserLogin: (state, action) => {
      state.alternativeLogin = true;
      window.localStorage.setItem(
        "auth",
        JSON.stringify(state.alternativeLogin)
      );
      state.userData = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userData));
    },
    regester: (state, action) => {
      state.alternativeRegester = true;
      window.localStorage.setItem(
        "reg",
        JSON.stringify(state.alternativeRegester)
      );
      state.userData = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userData));
    },
    update: (state, action) => {
      state.userData = action.payload;
      localStorage.setItem("user", JSON.stringify(state.userData));
    },
    logout: (state) => {
      state.alternativeLogin = false;
      state.alternativeRegester = false;
      state.token = null;
      state.userData = null;
      window.localStorage.setItem(
        "auth",
        JSON.stringify(state.alternativeLogin)
      );
      window.localStorage.setItem(
        "reg",
        JSON.stringify(state.alternativeRegester)
      );
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("user");
    },
    addToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
  },
});
export const userToken = (state) => state?.authSlice?.token;
export const { handleUserLogin, logout, update, addToken, regester } =
  authSlice.actions;
export default authSlice.reducer;
