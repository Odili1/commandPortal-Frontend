import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdmin } from "../../interfaces/admin.interface";
import { RootState } from "../store";

type  sliceState = {
    adminData: IAdmin | null
}

const initialState: sliceState = {
    adminData: null
}


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminData: (state, action: PayloadAction<IAdmin>) => {
            console.log(`setAdmin: ${JSON.stringify(action.payload)}`);
            
            state.adminData = {...state.adminData, ...action.payload}
        }
    }
})

export const {setAdminData} = adminSlice.actions

export const selectAdminData =  (state: RootState) => state.admin.adminData

export default adminSlice