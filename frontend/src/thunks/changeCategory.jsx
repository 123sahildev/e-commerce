import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const changeCategory = createAsyncThunk(
    "changeCategory",
    async (category) => {
        let res = await axios.get(`https://dummyjson.com/products/category/${category}`);
        console.log(res.data);
        
        return res.data.products
    }
)