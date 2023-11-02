import { configureStore } from "@reduxjs/toolkit";
import authModalSlice from "./feartures/authModalSlice";

const store = configureStore({
    reducer: {
        authModal: authModalSlice,
    },
});

export default store;
