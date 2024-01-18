import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slice/messageSlice";


export const store = configureStore({
    devTools : true,
    reducer : {
        message : messageReducer
    }
});
