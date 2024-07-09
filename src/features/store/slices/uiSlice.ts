import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type SliceState = {
    showSideBarModal: boolean
}

const initialState: SliceState = {
    showSideBarModal: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setShowSideBarModal(state){
            state.showSideBarModal = !state.showSideBarModal
        }
    }
})


export const {
    setShowSideBarModal
} = uiSlice.actions

export const showSideBarModal = (state: RootState) => state.ui.showSideBarModal

export default uiSlice
