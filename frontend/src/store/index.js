import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fatchStatusSlice from "./fatchStatusSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: fatchStatusSlice.reducer,
  },
});

export default myntraStore;
