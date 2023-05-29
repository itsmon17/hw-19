import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { calculateSlice } from "./calculator.slice";
import userSlice from "./user.slice";

const store = createStore(composeWithDevTools());
export { store };
export default configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [calculateSlice.name]: calculateSlice.reducer,
  },
});
