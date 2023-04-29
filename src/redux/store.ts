import { combineReducers, configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: combineReducers({}),
    devTools:true,
});