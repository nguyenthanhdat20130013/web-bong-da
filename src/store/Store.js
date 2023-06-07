import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {root} from "./RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer= combineReducers({root});
const enhancers=composeWithDevTools({});
export const store= configureStore({reducer,enhancers});