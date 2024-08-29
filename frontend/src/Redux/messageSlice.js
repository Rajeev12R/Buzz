import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: [], // Initialize messages as an empty array
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload); // Add a single new message
        },
    },
});

export const { setMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
