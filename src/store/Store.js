import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from './configSlice'
import orderSlice from "./orderSlice";


const store = configureStore(
    {
        reducer:{
            cart:cartSlice,
            order:orderSlice
        }
    }
)


export default store