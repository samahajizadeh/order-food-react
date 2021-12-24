import { configureStore } from "@reduxjs/toolkit";

import orderSlice from "./order";

const store = configureStore({
  reducer: { order: orderSlice },
});
export default store;
