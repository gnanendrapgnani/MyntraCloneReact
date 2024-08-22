import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../Data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

export const itemsActions = itemSlice.actions;

export default itemSlice;
