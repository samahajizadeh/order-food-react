import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  isAuthenticate: false,
};
const authSlice = createSlice({
  name: "Auth",
  initialState: initialStateAuth,
  reducers: {
    isLogin(state,action) {
      debugger
      state.isAuthenticate = true;
    },
    isLogOut(state,action) {
      state.isAuthenticate = false;
    },
  },
});

export const { isLogin, isLogOut } = authSlice.actions;

export default authSlice.reducer;
