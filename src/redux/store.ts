import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/userSlice/userSlice.ts";

export const store = configureStore({
    reducer: { // WE CONFIGURE DIFFERENT SLICES(CONTEXTS) FOR DIFFERENT USE CASES
        userSlice: userSlice.reducer,
        // postSlice: null,
    }
});