import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userDataType } from "../../helpers/typeGuards.helper";
import { RootState } from "../store";


type  sliceState = {
    loggedInUserData: userDataType
}

const initialState: sliceState = {
    loggedInUserData: null
}

const loggedInUserSlice = createSlice({
    name: 'loggedInUser',
    initialState,
    reducers: {
        setLoggedInUserData: (state, action: PayloadAction<userDataType>) => {
            console.log(`setUser: ${JSON.stringify(action.payload)}`);
            
            state.loggedInUserData = action.payload
        }
    }
})


export const {setLoggedInUserData} = loggedInUserSlice.actions

export const selectloggedInUserData = (state: RootState) => state.loggedInUser.loggedInUserData

export default loggedInUserSlice