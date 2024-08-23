import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: ["002", "004"],
  reducers: {
    addToBAg: (state, action) => {
      state.push(action.payload);
    },
    removeFromBAg: (state, action) => {
      return state.filter((itemID) => itemID !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
