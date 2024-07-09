import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SliceState = {
    showSideBarModal: boolean,
    showLogoutModal: boolean
}

const initialState: SliceState = {
    showSideBarModal: false,
    showLogoutModal: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setShowSideBarModal(state){
            state.showSideBarModal = !state.showSideBarModal
        },
        setShowLogoutModal(state){
            state.showLogoutModal = !state.showLogoutModal
        }
    }
})


export const {
    setShowSideBarModal,
    setShowLogoutModal
} = uiSlice.actions

export const selectShowSideBarModal = (state: RootState) => state.ui.showSideBarModal
export const selectShowLogoutModal = (state: RootState) => state.ui.showLogoutModal

export default uiSlice
