import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index";

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  applyMiddleware: applyMiddleware(...middleware),
  devTools: process.env.NODE_ENV !== "production" ? composeWithDevTools : false
});

export default store;
