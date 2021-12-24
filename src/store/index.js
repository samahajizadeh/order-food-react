import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./auth";
import orderSlice from "./order";
// import counterSlice from "./counter";

const store = configureStore({
  reducer: { login: authSlice, order: orderSlice },
});
export default store;
