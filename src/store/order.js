import { createSlice } from "@reduxjs/toolkit";

const intialStateOrder = {
  items: [],
  totalAmount: 0,
};
const orderSlice = createSlice({
  name: "order",
  initialState: intialStateOrder,
  reducers: {
    addItem(state, action) {
      const { id, amount, price } = action.payload;

      const updatedTotalAmount = state.totalAmount + price * amount;

      const itemIndex = state.items.findIndex((item) => item.id === id);
      const existingCartItem = state.items[itemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + amount,
        };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[itemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
    clearItem() {
      return {
        items: [],
        totalAmount: 0,
      };
    },
  },
});

export const { addItem, removeItem, clearItem } = orderSlice.actions;

export default orderSlice.reducer;
