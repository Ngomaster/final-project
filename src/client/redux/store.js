import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../components/Reducer/ReducerCart";

import { CheckLoginSlice } from "../components/Reducer/checklogin/CheckLogin";

const store = configureStore({
  reducer: {
    checklogin: CheckLoginSlice.reducer,
    reducercart: CartSlice.reducer,
  },
});

export default store;
