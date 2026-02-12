import { configureStore } from "@reduxjs/toolkit";
import contents from './slice.js'

export const Store = configureStore({
    reducer : {
        contents : contents
    } 
})