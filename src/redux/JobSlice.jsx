import { createSlice } from "@reduxjs/toolkit";




const jobSlice=createSlice({
    name:'job',
    initialState:{
        data:{}
    },
    reducers:{
        saveUserData:(state,action)=>{
         
            state.data=action.payload
        }
    }
})

export const {saveUserData} =jobSlice.actions
export default jobSlice.reducer