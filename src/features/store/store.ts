import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authSlice from "./slices/authSlice";
import uiSlice from "./slices/uiSlice";
import adminSlice from "./slices/adminSlice";
import studentSlice from "./slices/studentSlice";
import loggedInUserSlice from "./slices/userSlice";
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['admin']
}

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
    loggedInUser: loggedInUserSlice.reducer,
    admin: adminSlice.reducer,
    student: studentSlice.reducer,
    ui: uiSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredPaths: ['meta.baseQueryMeta.request']
        }
    }).concat(apiSlice.middleware),
    devTools: true
})


export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch

