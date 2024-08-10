import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdmin } from "../../interfaces/admin.interface";
import { RootState } from "../store";
import { IUser } from "../../interfaces/user.interface";
import { ITeacher } from "../../interfaces/teacher.interface";
import { IStudent } from "../../interfaces/student.interface";

type  sliceState = {
    adminData: IAdmin | null
    adminDashboardData: {
        users: IUser[] | [],
        admins: IAdmin[] | [],
        teachers: ITeacher[] | [],
        students: IStudent[] | [],
        classes: [],
        subjects: []
    }
}

const initialState: sliceState = {
    adminData: null,
    adminDashboardData: {
        users: [],
        admins: [],
        teachers: [],
        students: [],
        classes: [],
        subjects: []
    }
}


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminData: (state, action: PayloadAction<IAdmin>) => {
            console.log(`setAdmin: ${JSON.stringify(action.payload)}`);
            
            state.adminData = {...state.adminData, ...action.payload}
        },
        setAdminDashboardData: (state, action) => {
            console.log(`setAdminDashboardData: ${JSON.stringify(action.payload)}`);
            
            state.adminDashboardData = {...state.adminDashboardData, ...action.payload}
        }
    }
})

export const {setAdminData, setAdminDashboardData} = adminSlice.actions

export const selectAdminData =  (state: RootState) => state.admin.adminData
export const selectAdminDashboardData = (state: RootState) => state.admin.adminDashboardData
export const selectAdminDashboardDataForUsers = (state: RootState) => state.admin.adminDashboardData.users
export const selectAdminDashboardDataForAdmins = (state: RootState) => state.admin.adminDashboardData.admins
export const selectAdminDashboardDataForTeachers = (state: RootState) => state.admin.adminDashboardData.teachers
export const selectAdminDashboardDataForStudents = (state: RootState) => state.admin.adminDashboardData.students

export default adminSlice