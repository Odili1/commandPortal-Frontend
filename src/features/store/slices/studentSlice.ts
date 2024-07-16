import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudent } from "../../interfaces/student.interface";
import { RootState } from "../store";

type  sliceState = {
    studentData: IStudent | null
}

const initialState: sliceState = {
    studentData: null
}


const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentData: (state, action: PayloadAction<IStudent>) => {
            console.log(`setAdmin: ${JSON.stringify(action.payload)}`);
            
            state.studentData = action.payload
        }
    }
})

export const {setStudentData} = studentSlice.actions

export const selectStudentData =  (state: RootState) => state.student.studentData

export default studentSlice