import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlice";
import adminSlice from "./slices/adminSlice";
import studentSlice from "./slices/studentSlice";



export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice.reducer,
        admin: adminSlice.reducer,
        student: studentSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch

