import { configureStore } from "@reduxjs/toolkit";
import JobReducer from "./JobSlice";


const store=configureStore({
    reducer:{
        userData:JobReducer
    }
})


export default store