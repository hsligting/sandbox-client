import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "user",
    initialState: {
        username: "",
        type: null,
        isAuthenticated: false,
    },
    reducers: {
        set: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    },
});
