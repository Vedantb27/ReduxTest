import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
  // No need to specify redux-thunk; it's included by default
});

export default store;
