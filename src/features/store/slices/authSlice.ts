import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUserInfo } from "../../interfaces/userInfo";



type SliceState = {
    userInfo: IUserInfo | null
}

const storageValue: string | null = localStorage.getItem('userInfo') ?? null

const initialState: SliceState = {
    userInfo: storageValue ? JSON.parse(storageValue) : null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<IUserInfo>) => {
            console.log(`setCredentials: ${JSON.stringify(action.payload)}`);
            
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    }
})


// Actions
export const {
    setCredentials,
    logout
} = authSlice.actions


// Selectors
export const selectCurrentToken = (state: RootState) => state.auth.userInfo?.token
export const selectUserId = (state: RootState) => state.auth.userInfo?.userId


export default authSlice

