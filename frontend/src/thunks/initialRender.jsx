import { asyncThunkCreator, createAsyncThunk }  from "@reduxjs/toolkit"
import axios from "axios"

export const initialRender = createAsyncThunk(
    "initialRender",
    async () => {
        let res = await axios.get('https://dummyjson.com/products');
        
        return res.data.products
    }
)