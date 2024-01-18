import { createSlice } from "@reduxjs/toolkit";


const initialState = '';

const messageSlice = createSlice({
    name : 'msg',
    initialState,
    reducers : {
        passMessage : (state, action) => {
            console.log('slice check - ', action.payload);
            state = action.payload;
            return state;
        }
    }
});


export const { passMessage } = messageSlice.actions;

export default messageSlice.reducer;