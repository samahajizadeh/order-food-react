import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isAuthenticate: false,
};
const authSlice = createSlice({
  name: "Auth",
  initialState: initialStateAuth,
  reducers: {
    isLogin(state) {
      state.isAuthenticate = true;
    },
    isLogOut(state) {
      state.isAuthenticate = false;
    },
  },
});

export const { isLogin, isLogOut } = authSlice.actions;

export default authSlice.reducer;
