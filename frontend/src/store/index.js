import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fatchStatusSlice from "./fatchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fatchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
