import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const intialStateCounter = {
  counter: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: intialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      
      if (state.counter >= 1) {
        state.counter--;
      } else {
        state.counter = 1;
      }
    },
  },
});

export const counterState =(state) =>state.counter.counter

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
